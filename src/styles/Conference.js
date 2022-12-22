import styled from "styled-components";
import { motion } from "framer-motion";
import Select from "react-select";

export const Container = styled(motion.div)`
  padding: 20px;
  width: calc(100% - 2 * 20px);
  display: grid;
  justify-content: center;
`;

export const ControlPanel = styled.section`
  background-color: #eee;
  height: 7.5vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  width: 30vw;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Dropdown = styled(Select)`
  width: 50%;

  @media (max-width: 560px) {
    width: 200%;
  }
`;

export const LinkContainer = styled.div`
  margin: 15px 0;
  padding: 15px;
  width: calc(30vw - 15px * 2);
  height: 15vh;
  background-color: #eee;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  display:grid;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100%;
  }

  & a {
    font-weight: 600;
    color: #222;
    background-color: #fff;
    text-decoration: none;
    border: 3px solid #6246ea;
    padding: 5px;
    border-radius: 10px;
    height: 25%;
  }
`;
