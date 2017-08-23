//import { Cookies } from 'react-cookie';
import Cookies from 'universal-cookie';
import isomorphicCookie from 'isomorphic-cookie';

export function setCookie(cname, cvalue, exdays) {
  const cookies = new Cookies();
  return cookies.set(cname, cvalue, { path: '/' });
}

export function getCookie(cname) {
  const token = isomorphicCookie.load('x-access-token');
  return token;
}
