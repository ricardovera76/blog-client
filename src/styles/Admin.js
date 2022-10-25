import styled from "styled-components";
import { motion } from "framer-motion";
import Select from "react-select";

export const Container = styled(motion.div)`
  padding: 20px;
  width: calc(100% - 2 * 20px);
  display: grid;
  justify-content: center;
`;

export const Sections = styled.section`
  width: 40vw;
  height: 35vh;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Dropdown = styled(Select)`
  width: 80%;

  @media (max-width: 560px) {
    width: 200%;
  }
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 50%;
`;

export const Input = styled.input`
  border: 2px solid #6246ea;
  width: 90%;
  height: 20%;
  margin: 5px 0;
  outline: none;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: all 0.5s;

  &:focus {
    border: 2px solid #46c4ea;
  }
  @media (max-width: 560px) {
    width: 200%;
  }
`;

export const Button = styled.button`
  color: black;
  background-color: #eee;
  display: flex;
  border-radius: 10px;
  width: 20%;
  height: 20%;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  transition: all 0.2s ease-in-out;
  border: none;
  outline: 0;
  margin: 10px 0;

  &:hover {
    background-color: #6246ea;
    color: white;
    box-shadow: var(--shadow);
    cursor: pointer;
  }
  &.active {
    background-color: #00b7ff;
    color: white;
  }
  &.active:hover {
    background-color: #46c4ea;
    box-shadow: var(--shadow);
    cursor: pointer;
  }

  @media (max-width: 560px) {
    width: 80%;
    height: 25%;
  }
`;

export const Warning = styled.p`
  color: #ffaa00;
  font-weight: 600;
  font-size: 0.9rem;
`;
