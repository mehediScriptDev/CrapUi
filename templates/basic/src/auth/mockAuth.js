export function loginMock(username){
  // returns a fake JWT-like token (not secure) for demo
  const token = btoa(JSON.stringify({ user: username, iat: Date.now() }));
  localStorage.setItem('mock_token', token);
  return token;
}

export function getToken(){
  return localStorage.getItem('mock_token');
}

export function logout(){
  localStorage.removeItem('mock_token');
}
