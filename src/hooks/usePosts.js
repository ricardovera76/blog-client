import ax from "axios";

export const usePosts = (endpoint) => {
  const getDashboardPosts = async () => {
    const response = await fetch(`${endpoint}/dashboard/recent`);
    const data = await response.json();
    if (!data.error) {
      return data;
    }
    return [];
  };

  const createAPost = async (data) => {
    const res = await ax.post(`${endpoint}/posts/new`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  };

  return { getDashboardPosts, createAPost };
};
