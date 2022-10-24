import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  padding: 15px;
  display: ${(props) => (props.w > 600 ? "flex" : "block")};
  width: calc(100% - 2 * 15px);
  justify-content: center;
  height: calc(90vh - 2 * 15px);

  @media (max-width: 1020px) {
    height: 90vh;
  }
`;

export const Chat = styled.section`
  width: ${(props) => (props.w > 600 ? "60%" : "100%")};
  height: ${(props) => (props.w > 600 ? "100%" : "85%")};
  border-radius: 15px;
`;

export const ChatHead = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #6246ea;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ w }) => (w > 600 ? "1.5rem" : "16px")};
  padding: 5px;
  width: calc(100% - 2 * 5px);
  height: calc(10% - 2 * 5px);
  font-weight: 800;
`;

export const ChatMain = styled.div`
  background-color: #eee;
  width: calc(100% - 2 * 15px);
  height: calc(80% - 2 * 15px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const ChatMessage = styled.div`
  /* max-width: 60%;
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
  color: ${(props) => (props.type === "me" ? "#000" : "#fff")}; */

  align-self: ${(props) => (props.type === "me" ? "flex-end" : "flex-start")};
  background-color: #fff;
  color: #000;
  margin: 1.5rem 0;
  position: relative;
  overflow-wrap: break-word;
  max-width: 75%;
  padding: 7px 15px;
  margin-bottom: 2px;

  background-color: ${(props) => (props.type === "me" ? "#fff" : "#6246ea")};
  border-radius: 15px;
  color: ${(props) => (props.type === "me" ? "#000" : "#fff")};
  margin-left: ${(props) => (props.type === "me" ? "auto" : "none")};
  margin-right: ${(props) => (props.type !== "me" ? "auto" : "none")};

  &::before {
    content: attr(data-time);
    font-size: 0.8rem;
    position: absolute;
    bottom: 100%;
    color: #888;
    white-space: nowrap;
  }
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
  height: calc(10% - 2 * 5px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ChatInputText = styled.input`
  display: flex;
  border-radius: 15px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
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
  height: ${({ w }) => (w > 600 ? "auto" : "4%")};
  padding: 15px;
  width: calc(${({ w }) => (w > 600 ? "20%" : "90%")} - 2 * 2%);
  margin: 2%;
  display: flex;
  flex-direction: ${({ w }) => (w > 600 ? "column" : "row")};
  justify-content: ${({ w }) => (w > 600 ? "flex-start" : "space-evenly")};
`;

export const Dropdown = styled(motion.div)`
  position: relative;
  display: inline-block;
  height: ${({ w }) => (w > 600 ? "auto" : "100%")};
  width: ${({ w }) => (w > 600 ? "100%" : "45%")};
`;

export const DropdownButton = styled.button`
  background-color: #fff;
  font-size: ${({ w }) => (w > 600 ? "1rem" : "12px")};
  height: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: ${({ isopen }) => (isopen === "true" ? "block" : "none")};
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
  font-size: ${({ w }) => (w > 900 ? "16px" : "12px")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #6246ea;
    color: #fff;
  }
`;

export const Files = styled.div`
  overflow-y: scroll;
  background-color: #fff;
  height: 90%;
  margin-top: 5px;
  padding: 15px;
  border-radius: 15px;
`;

export const FilesButton = styled.button`
  background-color: #fff;
  font-size: ${({ w }) => (w > 600 ? "1rem" : "12px")};
  height: ${({ w }) => (w > 600 ? "auto" : "100%")};
  width: 45%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #6246ea;
    color: #fff;
  }
`;

export const FilesBackdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5ms;
`;

export const FilesModal = styled.div`
  background-color: #eee;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 4%;
  display: flex;
  flex-direction: row-reverse;
`;

export const ExitModal = styled.div`
  width: 20px;
  aspect-ratio: 1/1;
  &:hover {
    cursor: pointer;
  }
`;
