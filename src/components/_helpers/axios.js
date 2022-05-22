import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.baseURL = "http://localhost:3000/";

axios.interceptors.request.use(
  async (config) => {
    const accessToken = Cookies.get("accessToken");
    // config.headers = {
    //   authorization: `Bearer ${accessToken}`,
    //   accept: "application/json",
    //   "Content-Type": "application/x-www-form-urlencoded",
    // };
    config.headers.authorization = `Bearer ${accessToken}`;
    console.log("request");
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("interceptor ok");
    return response;
  },
  async (error) => {
    console.log("erreur token");
    console.log(error);
    const refreshToken = Cookies.get("refreshToken");
    const originalRequest = error.config;
    if (
      error.config.url != "refreshToken" &&
      error.response.status === 401 &&
      originalRequest._retry !== true
    ) {
      console.log("erreur refresh");
      originalRequest._retry = true;
      if (refreshToken && refreshToken != "") {
        console.log("erreur bearer");
        axios.defaults.headers.common[
          "authorization"
        ] = `Bearer ${refreshToken}`;
        console.log("refresh token");
        await axios
          .post("refreshToken")
          .then((response) => {
            axios.defaults.headers.common[
              "authorization"
            ] = `Bearer ${response.data.accessToken}`;
            originalRequest.headers[
              "authorization"
            ] = `Bearer ${response.data.accessToken}`;
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response.status);
            localStorage.setItem("refreshToken", null);
          });
        return axios(originalRequest);
      }
    }
  }
);
