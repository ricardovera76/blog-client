import React, { useEffect, useRef, useState } from "react";
import { useUserInfo } from "../hooks/useUserInfo";
import { Button, Forms, Input, Warning } from "../styles/Admin";

const UserOptions = ({ type }) => {
  const [msg, setMsg] = useState("");
  const { changeIp, changePass, makeTeacher } = useUserInfo(
    "http://localhost:5000"
  );
  const userNameRef = useRef();
  const userValue = useRef();

  const handler = async () => {
    const userName = userNameRef.current?.value;
    if (type === "makeTeacher") {
      if (userName === "" || userName === undefined) {
        setMsg("Ingrese un nombre de usuario");
        return;
      }
      const data = await makeTeacher({ userName });
      setMsg(data.message);
      return;
    }
    if (type === "changeIp") {
      const ipAddress = userValue.current?.value;
      console.log(ipAddress, userName);
      if (
        userName === "" ||
        userName === undefined ||
        ipAddress === "" ||
        ipAddress === undefined
      ) {
        setMsg(
          "Ingrese todos los valores [nombre de usuario y nueva direccion ip]"
        );
        return;
      }
      const data = await changeIp({ userName, ipAddress });
      setMsg(data.message);
      return;
    }
    if (type === "changePass") {
      const password = userValue.current?.value;
      if (
        userName === "" ||
        userName === undefined ||
        password === "" ||
        password === undefined
      ) {
        setMsg(
          "Ingrese todos los valores [nombre de usuario y nueva contraseña]"
        );
        return;
      }
      const data = await changePass({ userName, password });
      setMsg(data.message);
      return;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, 1500);
  }, [msg]);

  return (
    <>
      {msg !== "" && <Warning>{msg}</Warning>}
      {type !== undefined && (
        <Forms>
          <Input placeholder="nombre de usuario" ref={userNameRef} />
          {type !== "makeTeacher" && (
            <Input
              placeholder={
                type === "changeIp"
                  ? "ingresa direccion IPv4"
                  : "ingrese nueva contraseña"
              }
              ref={userValue}
            />
          )}
          <Button onClick={handler}>send</Button>
        </Forms>
      )}
    </>
  );
};

export default UserOptions;
