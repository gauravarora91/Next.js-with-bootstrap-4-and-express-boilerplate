import { setCookie, getCookie } from './Cookie';

export const isLoggedIn = () => {
  const token = getToken();
  return !!token;
};

export const getToken = () => {
  const token = getCookie('x-access-token');
  return token;
};

// setProfile(profile) {
//   // Saves profile data to localStorage
//   localStorage.setItem('profile', JSON.stringify(profile));
// }
//
// getProfile() {
//   // Retrieves the profile data from localStorage
//   const profile = localStorage.getItem('profile');
//   return profile ? JSON.parse(localStorage.profile) : {};
// }
//
// setToken(token) {
//   // Saves user token to localStorage
//   localStorage.setItem('token', token);
// }

//
//   logout() {
//     // Clear user token and profile data from localStorage
//     localStorage.removeItem('token');
//     localStorage.removeItem('profile');
//   }
//
//   _checkStatus(response) {
//     // raises an error in case response status is not a success
//     if (response.status >= 200 && response.status < 300) {
//       return response;
//     } else {
//       var error = new Error(response.statusText);
//       error.response = response;
//       throw error;
//     }
//   }
//
//   fetch(url, options) {
//     // performs api calls sending the required authentication headers
//     const headers = {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     };
//
//     if (this.loggedIn()) {
//       headers['Authorization'] = 'Bearer ' + this.getToken();
//     }
//
//     return fetch(url, {
//       headers,
//       ...options
//     })
//       .then(this._checkStatus)
//       .then(response => response.json());
//   }
// }
