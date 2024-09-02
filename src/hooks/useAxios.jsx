import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
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
        console.log(error);
        if (error.response.status === 401) {
          toast.error(error.response.data.message);
        }
      }
    );
  }, []);
  return instance;
};

export default useAxios;
