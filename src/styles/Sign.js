import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Input = styled.input`
  border: 2px solid #6246ea;
  width: 80%;
  height: 10%;
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
`;

export const Button = styled.button`
  color: black;
  background-color: #fff;
  display: flex;
  border-radius: 10px;
  width: 50%;
  height: 7%;
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

  @media (max-width: 1020px) {
    height: 15%;
  }
`;
