import axios from "axios";
import { useEffect } from "react";


const instance = axios.create({
  baseURL: "https://online-group-study-a11-server.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        // console.log(response);
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);
  return instance;
};

export default useAxios;
