import Cookies from "js-cookie";

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const setCookie = (name, value, options = {}) => {
  Cookies.set(name, value, { expires: 365 * 10, ...options });
};

export const deleteCookie = (name) => {
  Cookies.remove(name);
};