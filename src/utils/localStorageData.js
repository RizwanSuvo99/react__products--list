export const localStorageData = () => {
    let data = localStorage.getItem("products");
    return JSON.parse(data) || [];
  };
  