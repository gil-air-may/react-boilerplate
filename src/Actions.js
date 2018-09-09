export function signinUser() {
  return function(dispatch) {
    dispatch({ type: 'AUTH_USER'})
  }
}