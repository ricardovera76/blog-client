import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, ItemName, Items, Navigation } from "../styles/Home";
import { logo } from "../assets/icons";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const logOutHandler = () => {
    console.log("logged out!");
  };

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Container>
        <Navigation
          initial={`${isOpen}`}
          animate={`${isOpen}`}
          variants={{
            true: {
              width: "15%",
            },
            false: {
              width: "3%",
            },
          }}
        >
          <ItemName onClick={toggleSideBar}>{logo("menu")}</ItemName>
          <ItemName to="#">Name</ItemName>
          <Items
            isopen={isOpen ? "true" : "false"}
            to="dashboard"
            className={location.pathname.slice(6) === "dashboard" && "active"}
          >
            <div>{logo("home")}</div>
            {isOpen && <p>HOME</p>}
          </Items>
          <Items isopen={isOpen ? "true" : "false"} to="chats">
            <div>{logo("chats")}</div>
            {isOpen && <p>CHATS</p>}
          </Items>
          <Items isopen={isOpen ? "true" : "false"} to="posts">
            <div>{logo("forum")}</div>
            {isOpen && <p>FOROS</p>}
          </Items>
          {/* <Items isopen={isOpen ? "true" : "false"} to="conference">
            <div>{logo("conference")}</div>
            {isOpen && <p>VID. CONF.</p>}
          </Items> */}
          <Items
            isopen={isOpen ? "true" : "false"}
            to="/signin"
            onClick={logOutHandler}
          >
            <div>{logo("logout")}</div>
            {isOpen && <p>SALIR</p>}
          </Items>
        </Navigation>
      </Container>
      <Outlet />
    </div>
  );
};

export default Home;
