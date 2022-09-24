export const getDashboardPosts = async () => {
  const response = await fetch("http://localhost:5000/dashboard");
  const data = await response.json();
  return data;
};
