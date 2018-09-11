import axios from 'axios'

export const signinUser = (email, password) => dispatch => {
  

  console.log({ email, password })
    axios.post(`/sessions/signin`, { email: email, password: password })
      .then(function (response) {
        console.log('Inside then')
        console.log(response)
        // dispatch({ type: 'AUTH_USER'});
        // console.log(response.data)
        // localStorage.setItem('token', response.data.token);
      })
      .catch(function(error) {
        console.log('Inside Error')
        console.log(error)
        //alert(error.message);
      })
  return  
  // return function(dispatch) {
  // }
}