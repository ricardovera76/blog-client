import ax from "axios";

export const useUserInfo = (endpoint) => {
  const getUserInfo = async (info) => {
    const response = await ax.post(`${endpoint}/user`, info);
    return response.data;
  };

  return { getUserInfo };
};
