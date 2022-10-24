import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Container = styled.nav`
  width: 100vw;
  height: 100%;
  display: flex;
`;

export const Navigation = styled(motion.ul)`
  background-color: #eff0f3;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  height: 100vh;
  min-width: 7%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  z-index: 100;
  box-shadow: var(--shadow);
`;

export const PocketNavigation = styled.ul`
  background-color: #eff0f3;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 100vw;
  /* min-height: 3%; */
  height: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  z-index: 100;
  box-shadow: var(--shadow);
`;

export const Items = styled(NavLink)`
  list-style: none;
  text-decoration: none;
  color: black;
  background-color: #fff;
  display: flex;
  justify-content: ${(props) =>
    props.isopen === "true" ? "space-between" : "center"};
  align-items: center;
  border-radius: 10px;
  width: ${(props) => (props.isopen === "true" ? "80%" : "6%")};
  height: 3%;
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

  @media (max-width: 1020px) {
    width: 2%;
    height: 50%;
  }
`;

export const ItemName = styled.li`
  list-style: none;
  margin: 20px 0;
  text-decoration: none;
  color: black;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 35px;
  transition: all 0.2s ease-in-out;
  border: none;
  outline: 0;

  &:hover {
    cursor: pointer;
  }
`;
