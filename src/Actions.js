import axios from 'axios'

export function signinUser (email, password) {

  console.log({ email, password })
    return function (dispatch) {
      axios.post(`https://jsonplaceholder.typicode.com/posts`, { title: email, body: password, userId: '1' })
      .then(res => {
        //console.log('INSIDE THEN')
        //console.log(res)
        dispatch({type: 'AUTH_USER'})
      })
      .catch(err => {
        console.log(err)
        dispatch({type: 'Bad login info'});
      });
      
  // return function(dispatch) {
  // 
  }
}