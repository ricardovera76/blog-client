import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  padding: 20px;
  width: calc(100% - 2 * 20px);
  display: grid;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CarouselContainer = styled(motion.div)`
  margin: 0 25px;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  margin: 30px;
  padding: 10px;
  background-color: #eee;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    background-color: #6246ea;
    color: white;
  }
`;

export const ChatsContainer = styled.section`
  margin: 0px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatsGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 550px) {
    justify-content: flex-start;
  }
`;

export const Chats = styled.li`
  width: 40%;
  background-color: red;
  margin: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  list-style: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  padding: 0 15px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  transition: all 0.5s;
  align-items: center;
  &:hover {
    background-color: #6246ea;
    color: white;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    width: 80%;
  }
`;
