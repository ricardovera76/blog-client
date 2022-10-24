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

  const createAPost = async (title, body, userId) => {
    const data = await ax.post(`${endpoint}/posts/new`, {
      post_body: body,
      post_title: title,
      post_user_id: userId,
    });
    return data;
  };

  return { getDashboardPosts, createAPost };
};
