import React, { useState } from "react";
import { Container, ControlPanel, Dropdown, LinkContainer } from "../styles/Conference";
import io from "socket.io-client";
import { useAuth } from "../hooks/useAuth.js";
import { useWindowSize } from "../hooks/useWindowSize";
import { useEffect } from "react";

const socket = io.connect("http://localhost:5000");

const Conference = () => {
  const windowSize = useWindowSize();
  const [subject, setSubject] = useState({});
  const [link, setLink] = useState("");
  const [options, setOptions] = useState();
  const [user] = useAuth();

  useEffect(() => {
    if (user.user_subjects !== undefined) {
      const arr = JSON.parse(user.user_subjects);
      const res = [];
      arr?.map((sub) => {
        const obj = JSON.parse(sub);
        return res.push({ label: obj.subject_name, value: obj.subject_id });
      });
      setOptions(res);
    }
  }, [user]);

  const broadcastMessage = async () => {
    if (subject.label === undefined) {
      console.log("a");
      return;
    }
    const msg = `https://vdo.ninja/?room=${subject.label.split(" ").join("")}${
      subject.value
    }${user.user_id}${user.user_name}${Math.floor(
      Math.random() * 100
    )}&sl&sas&ad&vd`;
    console.log(msg);
    setLink(msg);
    if (msg !== "") {
      const messageData = {
        chat_name: subject.label,
        user_name: user.user_name,
        message: `Ingresa a la video-clase usando el siguiente enlace : ${msg}`,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send", messageData);
      setSubject({});
    }
    return;
  };

  return (
    <Container>
      <ControlPanel>
        <Dropdown
          w={windowSize.width}
          placeholder={"Selecciona Una Materia"}
          onChange={(val) => {
            setSubject(val);
          }}
          options={options}
        />
        <button onClick={broadcastMessage}>Crear</button>
      </ControlPanel>
      {link !== "" && (
        <LinkContainer>
          <h2>Ingresa a la clase</h2>
          <a href={link} target="_blank">
            Click Aqui Para ingresar
          </a>
        </LinkContainer>
      )}
    </Container>
  );
};

export default Conference;
