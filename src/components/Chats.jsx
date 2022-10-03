import React from "react";
import io from "socket.io-client";
import { logo } from "../assets/icons";
import { AnimatePresence } from "framer-motion";
import {
  Chat,
  ChatHead,
  ChatInput,
  ChatInputSend,
  ChatInputText,
  ChatMain,
  ChatMessage,
  ChatMessageInfo,
  Container,
  // DedicatedFiles,
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItems,
  Panel,
} from "../styles/Chats";

const socket = io.connect("http://localhost:5000");

const Chats = () => {
  // const [userID, setUserID] = React.useState("");
  const [room, setRoom] = React.useState("FISICA2021aaaa");
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [chatMessages, setChatMessages] = React.useState([]);
  const [dropdown, showDropdown] = React.useState(false);
  const chats = ["FISICA2021aaaa", "FISICA2021bbbb"];

  const userID = localStorage.getItem("user_id");

  const joinRoomHandler = () => {
    console.log("joined", room, userID);
    if (userID !== "" && room !== "") {
      setChatMessages([]);
      socket.emit("join", room);
    }
  };

  const sendMessageHandler = async () => {
    if (currentMessage !== "") {
      const messageData = {
        chat_name: room,
        user_id: userID,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
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
    <Container>
      <Chat>
        <ChatHead>{room}</ChatHead>
        <ChatMain>
          {chatMessages.map((messages) => {
            return (
              <ChatMessage
                key={messages.user_id + messages.time}
                type={messages.user_id === userID ? "me" : "other"}
              >
                <h4>{messages.message}</h4>
                <ChatMessageInfo>
                  <p>{messages.user_id}</p>
                  <p>{messages.time}</p>
                </ChatMessageInfo>
              </ChatMessage>
            );
          })}
        </ChatMain>
        <ChatInput>
          <ChatInputText
            placeholder="send message"
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <ChatInputSend onClick={sendMessageHandler}>
            {logo("send")}
          </ChatInputSend>
        </ChatInput>
      </Chat>
      <Panel>
        <Dropdown onClick={toggleDropdownMenu}>
          <DropdownButton>Seleccionar Chat</DropdownButton>
          <AnimatePresence>
            <DropdownMenu
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
                  <DropdownMenuItems
                    key={chat}
                    onClick={() => {
                      setRoom(chat);
                      joinRoomHandler();
                      toggleDropdownMenu();
                    }}
                  >
                    {chat}
                  </DropdownMenuItems>
                ))}
            </DropdownMenu>
          </AnimatePresence>
        </Dropdown>
        {/* <DedicatedFiles>Enviar archivos dedicados</DedicatedFiles> */}
      </Panel>
    </Container>
  );
};

export default Chats;
