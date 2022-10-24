import { useState, useRef } from "react";
import { Button, Container, Input } from "../styles/Sign";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [err, setErr] = useState("");
  const { signUp, getIpAdd } = useLogin("http://localhost:5000");
  const { setItem } = useLocalStorage("userSigned");
  const navigate = useNavigate();
  const aliasRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const passRepRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const alias = aliasRef.current.value;
    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const passwordRep = passRepRef.current.value;
    if (password !== passwordRep) {
      setErr("Las contraseñas no coinciden");
      return;
    }
    const ipAddress = await getIpAdd();
    const res = await signUp({ alias, userName, email, password, ipAddress });
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
      <Input
        placeholder="nombre"
        type="text"
        autoComplete="true"
        ref={aliasRef}
      />
      <Input
        placeholder="nombre de usuario"
        type="text"
        autoComplete="true"
        ref={userNameRef}
      />
      <Input
        placeholder="email"
        type="email"
        autoComplete="true"
        ref={emailRef}
      />
      <Input
        placeholder="contraseña"
        type={!showPass ? "password" : "text"}
        autoComplete="true"
        ref={passRef}
      />
      <Input
        placeholder="repetir contraseña"
        type={!showPass ? "password" : "text"}
        autoComplete="true"
        ref={passRepRef}
      />
      <Button
        type="button"
        onClick={() => {
          setShowPass(!showPass);
        }}
      >
        visualizar contraseñas
      </Button>
      <Button type="submit" onClick={submitHandler}>
        Ingresar
      </Button>
    </Container>
  );
};

export default SignUp;
