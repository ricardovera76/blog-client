import React from "react";
import io from "socket.io-client";
import { logo } from "../assets/icons";
import { AnimatePresence } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";
import * as Styles from "../styles/Chats";

const socket = io.connect("http://localhost:5000");

const Chats = () => {
  const [room, setRoom] = React.useState();
  // const [room, setRoom] = React.useState("FISICA2021aaaa");
  const [chatMessages, setChatMessages] = React.useState([]);
  const [dropdown, showDropdown] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const windowSize = useWindowSize();
  const bottomRef = React.useRef(null);
  const inputMsg = React.useRef(null);
  // const chats = ["FISICA2021aaaa", "FISICA2021bbbb"];
  const chats = [];

  const userID = JSON.parse(localStorage.getItem("userSigned")).user_id;

  const joinRoomHandler = () => {
    console.log("joined", room, userID);
    if (userID !== "" && room !== "") {
      setChatMessages([]);
      socket.emit("join", room);
    }
  };

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const sendMessageHandler = async () => {
    const msg = inputMsg.current.value;
    if (msg !== "") {
      const messageData = {
        chat_name: room,
        user_id: userID,
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

  const toggleDropdownMenu = () => {
    showDropdown(!dropdown);
  };

  return (
    <Styles.Container w={windowSize.width}>
      <Styles.Panel w={windowSize.width}>
        <Styles.Dropdown w={windowSize.width} onClick={toggleDropdownMenu}>
          <Styles.DropdownButton w={windowSize.width}>
            Selecciona Un Chat
          </Styles.DropdownButton>
          <AnimatePresence>
            <Styles.DropdownMenu
              w={windowSize.width}
              initial={`${dropdown}`}
              animate={`${dropdown}`}
              variants={{
                true: {
                  y: 0,
                },
                false: {
                  y: -25,
                },
              }}
              isopen={dropdown ? "true" : "false"}
            >
              {dropdown &&
                chats.map((chat) => (
                  <Styles.DropdownMenuItems
                    w={windowSize.width}
                    key={chat}
                    onClick={() => {
                      setRoom(chat);
                      joinRoomHandler();
                      toggleDropdownMenu();
                    }}
                  >
                    {chat}
                  </Styles.DropdownMenuItems>
                ))}
            </Styles.DropdownMenu>
          </AnimatePresence>
        </Styles.Dropdown>
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
        <Styles.ChatHead>{room}</Styles.ChatHead>
        <Styles.ChatMain>
          {chatMessages.map((messages) => {
            return (
              <Styles.ChatMessage
                key={messages.user_id + messages.time}
                type={messages.user_id === userID ? "me" : "other"}
                data-time={`${
                  messages.user_id === userID ? "" : messages.user_id
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
