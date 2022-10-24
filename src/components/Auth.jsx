import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AuthForm, Container, Switch } from "../styles/Auth";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  const [authType, setAuthType] = useState(true);
  const navigate = useNavigate();
  const { getItem } = useLocalStorage("userSigned");
  useEffect(() => {
    const value = getItem();
    if (value !== null) {
      navigate("/dashboard", { replace: true });
      return;
    }
    navigate("/auth", { replace: true });
  }, []);
  return (
    <Container>
      <AuthForm>
        <h2>{authType ? "Bienvenido de vuelta" : "Ingresa"}</h2>
        {authType ? <SignIn /> : <SignUp />}
        <Switch
          onClick={() => {
            setAuthType(!authType);
          }}
        >
          {!authType ? "Sign In" : "Sign Up"}
        </Switch>
      </AuthForm>
    </Container>
  );
};

export default Auth;
