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

  const setCurrentUser = (login) => {
    localStorage.setItem('currentUser', login);
  };

  const getCurrentUser = () => {
    return localStorage.getItem('currentUser');
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
  };

  return {
    saveUser,
    getUser,
    setCurrentUser,
    getCurrentUser,
    logout,
  };
};
