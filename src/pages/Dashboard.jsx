import React from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

const Dashboard = () => {
  const [userName, setUserName] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [chatMessages, setChatMessages] = React.useState([]);

  const joinRoomHandler = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessageHandler = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      console.log(messageData);
      setChatMessages((list) => [...list, messageData]);

      await socket.emit("send_message", messageData);
    }
  };

  React.useEffect(() => {
    socket.on("received_message", (data) => {
      console.log(data);
      setChatMessages((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div>
      <h3>Join a chat</h3>
      <input
        type="text"
        placeholder="user name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="chat room"
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={joinRoomHandler}>Join a room</button>
      <div>
        <div>
          <input
            type="text"
            placeholder="send message"
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button onClick={sendMessageHandler}>send Message</button>
          <div>
            {chatMessages.map((messages) => {
              return (
                <>
                  <h3>{messages.message}</h3>
                  <p>{messages.author}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
