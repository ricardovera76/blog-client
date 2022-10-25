import ax from "axios";

export const useUserInfo = (endpoint) => {
  const getUserInfo = async (info) => {
    const response = await ax.post(`${endpoint}/user`, info);
    return response.data;
  };
  const changeIp = async (info) => {
    const response = await ax.post(`${endpoint}/user/ip`, info);
    return response.data;
  };
  const changePass = async (info) => {
    const response = await ax.post(`${endpoint}/user/password`, info);
    return response.data;
  };
  const makeTeacher = async (info) => {
    const response = await ax.post(`${endpoint}/admin/teacher`, info);
    return response.data;
  };
  return { getUserInfo, changeIp, changePass, makeTeacher };
};
