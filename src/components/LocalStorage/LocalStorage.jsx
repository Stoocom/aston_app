export const LocalStorage = () => {
  const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];

  const saveUser = (login, password) => {
    const users = getUsers();

    if (users.some((user) => user.login === login)) {
      alert('Пользователь с таким логином уже существует.');
      return;
    }
    users.push({ login, password });
    localStorage.setItem('users', JSON.stringify(users));
  };

  const getUser = (login, password) => {
    const users = getUsers();
    return users.find(
      (user) => user.login === login && user.password === password
    );
  };

  return {
    saveUser,
    getUser,
  };
};
