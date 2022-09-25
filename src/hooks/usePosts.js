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

  return { getDashboardPosts, getAllPosts };
};
