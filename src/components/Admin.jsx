import React, { useState } from "react";
import { Container, Dropdown, Sections } from "../styles/Admin";
import Subjects from "./Subjects";
import UserOptions from "./UserOptions";
import { useAuth } from "../hooks/useAuth.js";

const optionsSubject = [
  { value: "addUser", label: "Añadir un usuario" },
  { value: "createSubject", label: "Crear nueva asignatura" },
  { value: "deleteSubject", label: "Eliminar asignatura" },
  { value: "removeUser", label: "quitar usuario de asignatura" },
];
const optionsAdmin = [
  { value: "makeTeacher", label: "Convertir usuario a profesor" },
  { value: "changeIp", label: "Cambiar IP de usuario" },
  { value: "changePass", label: "Cambiar contraseña de usuario" },
];
const optionsUser = [
  { value: "changeIp", label: "Cambiar IP de usuario" },
  { value: "changePass", label: "Cambiar contraseña de usuario" },
];
const Admin = () => {
  const [user] = useAuth();
  const [selectedOptionSubject, setSelectedSubjectOption] = useState(null);
  const changeSubjectHandler = (selected) => {
    setSelectedSubjectOption(selected);
  };
  const [selectedOptionUser, setSelectedUserOption] = useState(null);
  const changeUserHandler = (selected) => {
    setSelectedUserOption(selected);
  };
  return (
    <Container>
      <Sections>
        <h2>Asignaturas</h2>
        <Dropdown
          value={selectedOptionSubject}
          onChange={changeSubjectHandler}
          options={optionsSubject}
        />
        <Subjects type={selectedOptionSubject?.value} />
      </Sections>
      <Sections>
        <h2>Ususarios</h2>
        <Dropdown
          value={selectedOptionUser}
          onChange={changeUserHandler}
          options={user.user_type === "t" ? optionsUser : optionsAdmin}
        />
        <UserOptions type={selectedOptionUser?.value} />
      </Sections>
    </Container>
  );
};

export default Admin;
