import axios from 'axios'

export function signinUser() {

  return function (dispatch) {
    axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
    axios.post('/posts', {
      title: 'yoo',
      body: 'oyoo',
      userId: '1'
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
