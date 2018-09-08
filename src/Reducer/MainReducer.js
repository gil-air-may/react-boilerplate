export default function mainReducer (state , action) {
  switch (action.type) {
    case 'AUTHENTICATION_SUCCEEDED':
      return({...state,
      isAuthenticated: true,
    });
        
    case 'AUTHENTICATION_SIGNOUT':
      return ({...state,
      isAuthenticated: false,
    });
    
    default:
    return({...state})

  }
}