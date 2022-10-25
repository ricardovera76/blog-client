import ax from "axios";

export const useAdmin = (endpoint) => {
  const addUser2Subject = async (info) => {
    console.log(info);
    const response = await ax.post(`${endpoint}/admin/subjects/user`, info);
    return response.data;
  };
  const removeUserFromSubject = async (info) => {
    const response = await ax.delete(`${endpoint}/admin/subjects/user`, info);
    return response.data;
  };
  const createSubject = async (info) => {
    const response = await ax.post(`${endpoint}/admin/subjects`, info);
    return response.data;
  };
  const deleteSubject = async (info) => {
    const response = await ax.delete(`${endpoint}/admin/subjects`, info);
    return response.data;
  };
  return {
    addUser2Subject,
    removeUserFromSubject,
    createSubject,
    deleteSubject,
  };
};
