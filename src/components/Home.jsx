import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  ItemName,
  Items,
  Navigation,
  PocketNavigation,
} from "../styles/Home";
import { logo } from "../assets/icons";
import { useWindowSize } from "../hooks/useWindowSize";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { getItem, removeItem } = useLocalStorage("userSigned");
  const location = useLocation();
  const windowSize = useWindowSize();

  useEffect(() => {
    const value = getItem();
    if (value === null) {
      navigate("/auth", { replace: true });
      console.log("logged out!");
      return;
    }
    setUser(value);
  }, []);

  const logOutHandler = () => {
    removeItem();
    return;
  };

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
    return;
  };

  return (
    <div>
      <Container>
        {windowSize.width >= 1020 && (
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
            <ItemName to="#">{user?.user_name}</ItemName>
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
            {user?.user_type !== "s" && (
              <Items isopen={isOpen ? "true" : "false"} to="admin">
                <div>{logo("admin")}</div>
                {isOpen && <p>Administracion</p>}
              </Items>
            )}
            <Items isopen={isOpen ? "true" : "false"} to="conference">
            <div>{logo("conference")}</div>
            {isOpen && <p>VID. CONF.</p>}
          </Items>
            <Items
              isopen={isOpen ? "true" : "false"}
              to="/auth"
              onClick={logOutHandler}
            >
              <div>{logo("logout")}</div>
              {isOpen && <p>SALIR</p>}
            </Items>
          </Navigation>
        )}
        {windowSize.width < 1020 && (
          <PocketNavigation>
            <ItemName to="#">{user?.user_name}</ItemName>
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
            {user?.user_type !== "s" && (
              <Items isopen={isOpen ? "true" : "false"} to="admin">
                <div>{logo("admin")}</div>
                {isOpen && <p>Administracion</p>}
              </Items>
            )}
            <Items isopen={isOpen ? "true" : "false"} to="conference">
            <div>{logo("conference")}</div>
            {isOpen && <p>VID. CONF.</p>}
          </Items>
            <Items
              isopen={isOpen ? "true" : "false"}
              to="/signin"
              onClick={logOutHandler}
            >
              <div>{logo("logout")}</div>
              {isOpen && <p>SALIR</p>}
            </Items>
          </PocketNavigation>
        )}
      </Container>
      <Outlet />
    </div>
  );
};

export default Home;
