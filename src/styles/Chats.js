import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  margin-left: 6vh;
  padding: 15px;
  display: flex;
  justify-content: center;
  height: calc(100vh - 2 * 15px);
`;

export const Chat = styled.section`
  width: 60%;
  border-radius: 15px;
`;

export const ChatHead = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #6246ea;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 5px;
  width: calc(100% - 2 * 5px);
  height: calc(5% - 2 * 5px);
  font-weight: 800;
`;

export const ChatMain = styled.div`
  background-color: #eee;
  width: calc(100% - 2 * 15px);
  height: calc(90% - 2 * 15px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const ChatMessage = styled.div`
  max-width: 60%;
  margin-bottom: 15px;
  padding: 10px 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin: 15px;
  min-width: 30%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-wrap: break-word;
  align-self: ${(props) => (props.type === "me" ? "flex-end" : "flex-start")};
  justify-content: ${(props) =>
    props.type === "me" ? "flex-end" : "flex-start"};
  background-color: ${(props) => (props.type === "me" ? "#fff" : "#6246ea")};
  border-radius: 15px;
  color: ${(props) => (props.type === "me" ? "#000" : "#fff")};
`;

export const ChatMessageInfo = styled.div`
  display: flex;
  height: max-content;
  justify-content: space-between;
  padding: 0;
`;

export const ChatInput = styled.div`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #6246ea;
  padding: 5px;
  width: calc(100% - 2 * 5px);
  height: calc(5% - 2 * 5px);
  display: flex;
  justify-content: space-evenly;
`;

export const ChatInputText = styled.input`
  display: flex;
  border-radius: 15px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const ChatInputSend = styled.button`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  outline: none;
  border: none;
  color: #fff;
  background-color: #6246ea;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #46c4ea;
  }

  &:active {
    background-color: #00b7ff;
    color: white;
  }
  &:focus {
    background-color: #00b7ff;
    color: white;
  }
`;

export const Panel = styled.section`
  background-color: #eee;
  border-radius: 15px;
  padding: 15px;
  width: 20%;
  margin: 0 2%;
  display: flex;
  flex-direction: column;
`;

export const Dropdown = styled(motion.div)`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #fff;
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #6246ea;
    color: #fff;
  }
`;

export const DropdownMenu = styled(motion.div)`
  display: ${(props) => (props.isopen === "true" ? "block" : "none")};
  position: absolute;
  border-radius: 5px;
  z-index: 1000;
  width: 100%;
  background-color: #fff;
  box-shadow: var(--shadow);
`;

export const DropdownMenuItems = styled(motion.div)`
  padding: 15px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #6246ea;
    color: #fff;
  }
`;

export const DedicatedFiles = styled.div`
  overflow-y: scroll;
  background-color: #fff;
  height: 90%;
  margin-top: 5px;
  padding: 15px;
  border-radius: 15px;
`;
