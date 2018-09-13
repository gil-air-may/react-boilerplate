const initialState = {
  isAuthenticated: false
}


export function reduxStateReducer(state = initialState , action) {
  switch (action.type) {
    case 'AUTH_USER':
      return {...state, isAuthenticated: true}
    case 'Bad login info':
      return initialState
    
    default:
      return initialState
  }
}