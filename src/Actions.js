import axios from 'axios'

export function signinUser(email, password) {

  return function (dispatch) {
    axios.defaults.baseURL = 'http://192.168.15.5:4000/';
    axios.post('/sessions/signin', {
      email: email,
      password: password,
    })
    .then(function (response) {
      console.log(response);
      dispatch({ type: 'AUTH_USER' });

    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
