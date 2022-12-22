import styled from "styled-components";
import { motion } from "framer-motion";
import Select from "react-select";

export const Container = styled.div`
  /* background-color: red; */
  margin-left: 5vw;
  padding: 15px;
  display: grid;
  justify-items: center;
  align-content: flex-start;
  width: calc(95vw - 2 * 30px);
  height: calc(95vh - 2 * 30px);

  @media (max-width: 360px) {
    margin-bottom: 15vh;
    height: calc(80vh - 2 * 30px);
  }
`;

export const ControlPanel = styled.section`
  background-color: #eee;
  height: 7.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: min(calc(60% - 2 * 15px), 600px);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Panel = styled.ul`
  display: flex;
  height: 90%;
  width: 90%;
  padding: 0;
  align-items: center;
  justify-content: space-around;
`;

export const Controls = styled.li`
  background-color: #fffffe;
  padding: 10px;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  list-style: none;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    background-color: #6246ea;
    color: #fff;
  }
`;

export const PostsContainer = styled.section`
  width: 90%;
  height: 100%;
  overflow-y: scroll;
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  padding: 40px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 470px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`;

export const PostCard = styled.div`
  background-color: #eee;
  border-radius: 15px;
  padding: 10px;
  max-height: 10vh;
  min-height: 3vh;
  width: calc(100% - 2 * 10px);
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const Backdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  z-index: 1000000;
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5ms;
`;

export const ErrorMessage = styled.div`
  color: #bb2233;
  width: 50%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: #fff;
  padding: 15px;
  margin: 5px;
`;

export const Modal = styled.div`
  background-color: #fff;
  width: 50%;
  height: 70%;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media (max-width: 560px) {
    width: 80%;
    height: 90%;
  }
`;

export const ModalFull = styled.div`
  background-color: #fff;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10%;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  overflow-y: scroll;
`;

export const ModalBodyText = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-wrap: break-word;
`;

export const ModalBodyAtt = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FormPost = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 25px;
  margin: 0;
`;

export const FormExit = styled.div`
  width: 20px;
  aspect-ratio: 1/1;
  &:hover {
    cursor: pointer;
  }
`;

export const FormInput = styled.input`
  border-radius: 10px;
  margin: 10px 0;
  border: 2px solid #6246ea;
  padding: 15px 0;
  transition: all 0.5s;
  width: 100%;

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    outline: 2px solid #6246ea;
  }
`;

export const FormText = styled.textarea`
  margin: 10px 0;
  max-height: 25vh;
  height: 9vh;
  max-width: 100%;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #6246ea;
  padding: 15px 0;
  transition: all 0.5s;

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    outline: 2px solid #6246ea;
  }
`;

export const FormFile = styled.label`
  border-radius: 10px;
  margin: 10px 0;
  border: 2px solid #6246ea;
  display: inline-block;
  width: 100%;
  padding: 6px 0;
  cursor: pointer;
  & input[type="file"] {
    display: none;
  }
`;

export const Button = styled.button`
  margin: 10px 0;
  width: 100%;
  padding: 10px 0;
  background-color: #eee;
  border-radius: 10px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  /* border: 2px solid #6246ea; */
  font-weight: 600;
  transition: all 0.5s;

  &:hover {
    background-color: #6246ea;
    color: #ffffff;
    cursor: pointer;
  }
`;
export const Submit = styled.button`
  margin: 15px 0;
  width: 50%;
  padding: 10px 0;
  background-color: #eee;
  border-radius: 10px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  /* border: 2px solid #6246ea; */
  font-weight: 600;
  transition: all 0.5s;

  &:hover {
    background-color: #6246ea;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const ModalControls = styled.section`
  display: flex;
  justify-content: space-between;
  height: max-content;
  width: 100%;
`;
export const Dropdown = styled(Select)`
  width: 100%;

  @media (max-width: 560px) {
    width: 200%;
  }
`;