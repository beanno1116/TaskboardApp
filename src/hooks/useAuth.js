


const useAuth = () => {
  const setAuth = (value) => {
    localStorage.setItem('is-auth',JSON.stringify(value));
  }
  const getAuth = () => {
    return JSON.parse(localStorage.getItem('is-auth'));
  }
}

export default useAuth;