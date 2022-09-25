import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6vh;
  z-index: 1000;
  padding: 15px;
  display: grid;
  justify-items: center;
`;

export const ControlPanel = styled.section`
  background-color: #eee;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: min(calc(80vw - 2 * 15px), 500px);
  margin-bottom: 15px;
`;

export const PostsContainer = styled.section`
  background-color: #ff0000;
  width: calc(80vw - 2 * 30px);
  height: calc(82vw - 2 * 15px);
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  padding: 15px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
