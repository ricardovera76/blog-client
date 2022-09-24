import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  background-color: #eff0f3;
  width: 100vw;
  height: 100%;
  display: flex;
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  width: min(80%, 500px);
`;

export const Items = styled(NavLink)`
  list-style: none;
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
`;

export const ItemName = styled.li`
  list-style: none;
`;
