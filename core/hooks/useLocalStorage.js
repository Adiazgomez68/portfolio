const useLocalStorage = () => {
  const setItem = (key, value) => {
    window.localStorage.setItem(key, value);
  };

  const getItem = (key) => window.localStorage.getItem(key);

  return { setItem, getItem };
};

export default useLocalStorage;
