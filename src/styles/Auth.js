import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const AuthForm = styled.div`
  background-color: #eee;
  box-shadow: var(--shadow);
  border-radius: 15px;
  padding: 15px;
  width: 40%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 560px) {
    width: 75%;
  }
`;

export const Switch = styled.button`
  border: none;
  outline: none;
  background-color: #eee;
  color: #6246ea;
  cursor: pointer;
  text-decoration: underline;
`;
