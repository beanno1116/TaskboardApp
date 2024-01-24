import axios from "axios";
import { API_ENDPOINT } from "../config";
import { useMutation, useQuery } from "react-query";


const loginUser = async (email,password) => {
  const response = await axios.post(API_ENDPOINT,{email,password},{headers:{'Content-Type':'application/json'}});
  return response.data;
};

const useAuth = () => {
  const mutation = useMutation((loginObj) => axios.post(API_ENDPOINT,loginObj));

  const handleLogin = (email,password) => {
    mutation.mutate({email,password});
  }

  const handleLogout = () => {

  }

  return {
    handleLogin,
    handleLogout,
    isSuccess:mutation.isSuccess,
    isError:mutation.isError,
    isLoading:mutation.isLoading}
}

export default useAuth;