export const usePosts = (endpoint) => {
  const getDashboardPosts = async () => {
    const response = await fetch(`${endpoint}/dashboard`);
    const data = await response.json();
    return data;
  };
  const getAllPosts = async () => {
    const response = await fetch(`${endpoint}/posts`);
    const data = await response.json();
    return data;
  };
  const createAPost = async (title, body, userId) => {
    const response = await fetch(`${endpoint}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post_body: body,
        post_title: title,
        post_user_id: userId,
      }),
    });
    const data = await response.json();
    return data;
  };

  return { getDashboardPosts, getAllPosts, createAPost };
};
