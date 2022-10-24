import ax from "axios";

export const useLogin = (endpoint) => {
  const signIn = async (data) => {
    const res = await ax.post(`${endpoint}/signin`, data);
    return res.data;
  };
  const signUp = async (data) => {
    const res = await ax.post(`${endpoint}/signup`, data);
    return res.data;
  };
  const getIpAdd = async () => {
    const res = await ax.get("https://ipapi.co/json/");
    return res.data.ip;
  };

  return { signIn, signUp, getIpAdd };
};
