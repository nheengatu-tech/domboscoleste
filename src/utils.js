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
  localStorage.removeItem("@cdbl/user")
  window.location.replace("/")
}

// const BASE_URL = "http://localhost:4000"
const BASE_URL = "http://52.67.51.241:4000"
const TOKENNAME = "@cdbl/session_user"

export { BASE_URL, isUserLogged, getUser, logout, TOKENNAME };
