import { useState, useRef } from "react";
import { Button, Container, Input } from "../styles/Sign";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const [err, setErr] = useState("");
  const { signIn, getIpAdd } = useLogin("http://localhost:5000");
  const { setItem } = useLocalStorage("userSigned");
  const navigate = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    const [email] = validateEmail(emailInput);
    if (email === null) {
      setErr("esa no es una direccion de correo electronico");
      return;
    }
    const password = passRef.current.value;
    const ipAddress = await getIpAdd();
    const res = await signIn({ email, password, ipAddress });
    if (res.error) {
      setErr(res.message);
      return;
    }
    setErr("");
    setItem(res.data);
    navigate("/dashboard", { replace: true });
  };
  return (
    <Container onSubmit={submitHandler}>
      {err !== "" && (
        <div>
          <h3>{err}</h3>
        </div>
      )}
      <Input placeholder="email" type="email" ref={emailRef} />
      <Input
        placeholder="contraseña"
        type={!showPass ? "password" : "text"}
        autoComplete="true"
        ref={passRef}
      />
      <Button
        type="button"
        onClick={() => {
          setShowPass(!showPass);
        }}
      >
        visualizar contraseñas
      </Button>
      <Button onClick={submitHandler}>Ingresar</Button>
    </Container>
  );
};

export default SignIn;
