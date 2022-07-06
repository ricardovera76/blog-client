import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 750px;
  height: 500px;
  border-radius: 6px;
  padding: 15px;
  margin: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const StyledBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 720px;
  height: 250px;
  border-radius: 6px;
  padding: 15px;
  margin: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Header = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeadImage = styled.div`
  margin: 15px;
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
`;

const Dashboard = () => {
  const [state, setState] = React.useState(true);

  const Selector = styled.button`
    border: none;
    outline: none;
    border-radius: 6px;
  `;

  return (
    <Wrapper>
      <StyledSection>
        <Header>
          <Selector
            onClick={() => setState(true)}
            style={{ background: `${state ? "#00b7ff" : "#6246ea"}` }}
          >
            Residencial
          </Selector>
          <Selector
            onClick={() => setState(false)}
            style={{ background: `${!state ? "#00b7ff" : "#6246ea"}` }}
          >
            Comercial
          </Selector>
        </Header>
        <HeadImage>
          <img
            alt="image"
            src={
              state
                ? "https://i.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs"
                : "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
            }
          />
        </HeadImage>
        <StyledBody>
          {state
            ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.`
            : `
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem`}
        </StyledBody>
      </StyledSection>
    </Wrapper>
  );
};

export default Dashboard;
