export const getObjectFromLocalStorageByKey = (key: string) => {
  const result = localStorage.getItem(key);
  if (!result) {
    return null
  }
  return JSON.parse(result);
};

export const setObjectToLocalStorageByKey = (key: string, obj: any) => {
  localStorage.setItem(key, JSON.stringify(obj));
};

