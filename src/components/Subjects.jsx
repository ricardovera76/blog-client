import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useAdmin } from "../hooks/useAdmin";
import { Button, Forms, Input, Warning } from "../styles/Admin";

const Subjects = ({ type }) => {
  const {
    addUser2Subject,
    removeUserFromSubject,
    createSubject,
    deleteSubject,
  } = useAdmin("http://localhost:5000");
  const [msg, setMsg] = useState("");
  const ref1 = useRef();
  const subjectNameRef = useRef();

  const handler = async () => {
    const subjectName = subjectNameRef?.current.value;
    if (type === "addUser") {
      const userName = ref1.current?.value;
      console.log(userName, subjectName);
      if (subjectName === undefined && userName === undefined) {
        setMsg(
          "Ingrese todos los valores [nombre de asignatura y nombre de usuario]"
        );
        return;
      }
      const data = await addUser2Subject({ subjectName, userName });
      console.log(data);
      setMsg(data.message);
      return;
    }
    if (type === "createSubject") {
      if (subjectName === undefined) {
        setMsg(
          "Ingrese todos los valores [nombre de asignatura y nombre de chat]"
        );
        return;
      }
      const data = await createSubject({ subjectName });
      setMsg(data.message);
      return;
    }
    if (type === "deleteSubject") {
      if (subjectName) {
        setMsg("Ingrese todos los valores [nombre de asignatura]");
        return;
      }
      const data = await deleteSubject({ subjectName });
      setMsg(data.message);
      return;
    }
    if (type === "removeUser") {
      const userName = ref1.current?.value;
      if (subjectName && userName) {
        setMsg(
          "Ingrese todos los valores [nombre de asignatura y nombre de usuario]"
        );
        return;
      }
      const data = await removeUserFromSubject({ subjectName, userName });
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
          {type === "addUser" ? (
            <Input placeholder="nombre de usuario" ref={ref1} />
          ) : type === "removeUser" ? (
            <Input placeholder="nombre de usuario" ref={ref1} />
          ) : null}
          <Input placeholder="nombre de asignatura" ref={subjectNameRef} />
          <Button onClick={handler}>send</Button>
        </Forms>
      )}
    </>
  );
};

export default Subjects;
