import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  margin-top: 6vh;
  z-index: 1000;
  padding: 15px;
  display: grid;
  justify-items: center;
  align-content: flex-start;
  width: calc(100vw - 2 * 15px);
  height: calc(94vh - 2 * 15px);
`;

export const ControlPanel = styled.section`
  background-color: #eee;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: min(calc(80% - 2 * 15px), 500px);
  margin-bottom: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const Panel = styled.ul`
  display: flex;
  width: 90%;
  padding: 10px;
  justify-content: space-between;
`;

export const Controls = styled.li`
  background-color: #fffffe;
  padding: 10px;
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
  height: 90%;
  overflow-y: scroll;
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  padding: 15px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PostCard = styled.div`
  background-color: #eee;
  border-radius: 15px;
  padding: 10px;
  height: 25vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const NewPostModal = styled(motion.div)`
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
`;

export const FormPost = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 85%;
  height: 95%;
  padding: 25px;
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
  border: 2px solid #6246ea;
  padding: 15px;
  transition: all 0.5s;

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    outline: 2px solid #6246ea;
  }
`;

export const FormText = styled.textarea`
  max-height: 25vh;
  height: 15vh;
  max-width: 94%;
  width: 94%;
  border-radius: 10px;
  border: 2px solid #6246ea;
  padding: 15px;
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
  border: 2px solid #6246ea;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  & input[type="file"] {
    display: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
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
