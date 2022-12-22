import React from "react";
import ax from "axios";
import io from "socket.io-client";
import { logo } from "../assets/icons";
import { AnimatePresence } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";
import * as Styles from "../styles/Chats";

const socket = io.connect("http://localhost:5000");

const Chats = () => {
  const [room, setRoom] = React.useState();
  const [chatMessages, setChatMessages] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const windowSize = useWindowSize();
  const bottomRef = React.useRef(null);
  const inputMsg = React.useRef(null);
  const [chats, setChats] = React.useState([]);

  const userName = JSON.parse(localStorage.getItem("userSigned")).user_name;
  const userID = JSON.parse(localStorage.getItem("userSigned")).user_id;

  const joinRoomHandler = () => {
    console.log("joined", room.label, userName);
    if (userName !== "" && room.label !== "") {
      setChatMessages([]);
      socket.emit("join", room);
    }
    ax.get(`http://localhost:5000/chats/${room.label}`).then(({ data }) => {
      if (!data.error) {
        const arr = data.data.chat_messages;
        const res = [];
        arr.map((msg) => {
          const obj = JSON.parse(msg);
          return res.push(obj);
        });
        setChatMessages(res);
        console.log(res);
        return;
      }
      console.log(data.message);
    });
  };

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  React.useEffect(() => {
    ax.post("http://localhost:5000/user/chats", { userName }).then(
      ({ data }) => {
        if (!data.error) {
          const arr = data.data.user_subjects;
          const res = [];
          arr?.map((subject) => {
            const obj = JSON.parse(subject);
            return res.push({ label: obj.subject_name, value: obj.subject_id });
          });
          setChats(res);
          return;
        }
        console.log(data.message);
      }
    );
  }, [userName]);

  const sendMessageHandler = async () => {
    const msg = inputMsg.current.value;
    if (msg !== "") {
      const messageData = {
        chat_name: room.label,
        user_name: userName,
        message: msg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      inputMsg.current.value = "";
      setChatMessages((list) => [...list, messageData]);

      await socket.emit("send", messageData);
    }
  };

  React.useEffect(() => {
    socket.on("received", (data) => {
      setChatMessages((list) => [...list, data]);
    });
    if (userID !== "" && room !== "") {
      setChatMessages([]);
      socket.emit("join", room);
    }
  }, [room, userID]);

  return (
    <Styles.Container w={windowSize.width}>
      <Styles.Panel w={windowSize.width}>
        <Styles.Dropdown
          w={windowSize.width}
          options={chats}
          onChange={(val) => setRoom(val)}
        />
        <Styles.Button onClick={joinRoomHandler}>Join Room</Styles.Button>
        {windowSize.width <= 600 && (
          <Styles.FilesButton onClick={() => setShowModal(!showModal)}>
            Mostar Archivos
          </Styles.FilesButton>
        )}
        <AnimatePresence>
          {showModal && (
            <Styles.FilesBackdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Styles.FilesModal>
                <Styles.ModalHeader>
                  <Styles.ExitModal onClick={() => setShowModal(!showModal)}>
                    {logo("close")}
                  </Styles.ExitModal>
                </Styles.ModalHeader>
                <div>
                  <p>Content</p>
                </div>
              </Styles.FilesModal>
            </Styles.FilesBackdrop>
          )}
        </AnimatePresence>
        {/* <Files>Enviar archivos dedicados</Files> */}
      </Styles.Panel>
      <Styles.Chat w={windowSize.width}>
        <Styles.ChatHead>{room?.label}</Styles.ChatHead>
        <Styles.ChatMain>
          {chatMessages.map((messages) => {
            return (
              <Styles.ChatMessage
                key={
                  messages.user_id +
                  messages.chat_id +
                  messages.message +
                  Math.random() * 5
                }
                type={messages.user_name === userName ? "me" : "other"}
                data-time={`${
                  messages.user_name === userName ? "" : messages.user_name
                } ${messages.time}`}
              >
                <h4>{messages.message}</h4>
              </Styles.ChatMessage>
            );
          })}
          <div ref={bottomRef} />
        </Styles.ChatMain>
        <Styles.ChatInput>
          <Styles.ChatInputText placeholder="send message" ref={inputMsg} />
          <Styles.ChatInputSend onClick={sendMessageHandler}>
            {logo("send")}
          </Styles.ChatInputSend>
        </Styles.ChatInput>
      </Styles.Chat>
    </Styles.Container>
  );
};

export default Chats;
