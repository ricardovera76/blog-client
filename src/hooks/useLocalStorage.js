export const useLocalStorage = (key) => {
  const setItem = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  const getItem = () => {
    return window.localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key))
      : null;
  };
  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };
  return { setItem, getItem, removeItem };
};
