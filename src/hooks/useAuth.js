import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { useUserInfo } from "./useUserInfo";

export const useAuth = () => {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();
  const { getUserInfo } = useUserInfo("http://localhost:5000");
  const { setItem, getItem, removeItem } = useLocalStorage("userSigned");

  useEffect(() => {
    const getData = async () => {
      const userData = getItem();
      const response = await getUserInfo({
        userName: userData.user_name,
        alias: userData.user_alias,
      });
      setData(response);
      if (!response.error) {
        setItem(response.data);
        setChats(response.data?.user_subjects || []);
        setUser(response.data || []);
        return;
      }
      removeItem();
      navigate("/auth", { replace: true });
    };
    getData();
  }, []);

  return [user, chats, data];
};
