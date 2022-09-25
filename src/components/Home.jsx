import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, ItemName, Items, Navigation } from "../styles/Home";
import { logo } from "../assets/icons";

const Home = () => {
  const location = useLocation();
  const logOutHandler = () => {
    console.log("logged out!");
  };

  return (
    <div>
      <Container>
        <Navigation>
          <ItemName to="#">Name</ItemName>
          <Items
            className={location.pathname.slice(6) === "dashboard" && "active"}
            to="dashboard"
          >
            {logo("home")}
          </Items>
          <Items to="chats">{logo("chats")}</Items>
          <Items to="posts">{logo("forum")}</Items>
          <Items to="conference">{logo("conference")}</Items>
          <Items to="/signin" onClick={logOutHandler}>
            {logo("logout")}
          </Items>
        </Navigation>
      </Container>
      <Outlet />
    </div>
  );
};

export default Home;
