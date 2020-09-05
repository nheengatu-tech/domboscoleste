const isUserLogged = () => {
  return localStorage.getItem("@cdbl/session_user") ? true : false;
};

const getUser = () => {
  let userInLocalStorage = localStorage.getItem("@cdbl/session_user");
  let user = null;
  if (userInLocalStorage) {
    user = JSON.parse(userInLocalStorage);
  }
  return user;
};

const logout = () => {
  localStorage.removeItem("@cdbl/session_user")
  window.location.replace("/login")
}

export { isUserLogged, getUser, logout };
