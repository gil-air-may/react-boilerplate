import Cookies from 'universal-cookie'
//import Store from 'redux'


const signInSuccessfull = (data) => {
  setAuthToken(data.token);
  return {
	type: 'AUTHENTICATION_SUCCEDED',
  }
};

const setAuthToken = (token) => {
	const cookies = new Cookies();
  cookies.set('my_auth_token', token, {
    path: '/'
    });
};

// export const authFetch = (url, options) => (
//   fetch(url, mergeAuthHeaders(options)).then(
//     response => {
// 		// Sign out if we receive a 401!
//     if (response.status === 401) {
// 			Store.dispatch(signOut());
// 			throw new Error("Unauthorized");
// 					}
// 					return response;
// 			},
// 			error => error
// 	)
// );

const mergeAuthHeaders = (baseOptions) => {

	const options = typeof(baseOptions) ? {} : baseOptions;

  options.headers = {
    ...options.headers,
    'Authorization': `Bearer ${getAuthToken()}`,
  };
  return options;
}

const removeAuthToken = () => {
  const cookies = new Cookies();
  cookies.remove('my_auth_token', {
    path: '/',
  });
};

export const signIn = (email, password) => ((dispatch) => {
  return fetch(`http://<server_url>/api/sessions/sign_in}`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({email, password}),
    }).then(
      response => {
        if (!response.ok) {
          // Manage error
          return (response.statusText);
        }
        return response.json().then(response => dispatch(signInSuccessfull(response.data)));
      },
      error => {
          return error;
      }
  );
});

export const signOut = () => {
    removeAuthToken();
    return {
        type: 'AUTHENTICATION_SIGNOUT',
    }
};

export const getAuthToken = () => {
    const cookies = new Cookies();
    return cookies.get('my_auth_token');
};

