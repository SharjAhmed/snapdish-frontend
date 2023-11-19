import axios from "axios";

axios.defaults.baseURL = "https://snapdish-backend-eb95a816e88d.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create() // Axios instance to intercept the request.
export const axiosRes = axios.create() // Axios instance to intercept the response.
