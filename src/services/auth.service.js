import http from "../http-commons";
//const axios = require("axios").default;
class AuthService {
  login(data) {
    return http.post("/auth/login", data);
  }
}
export default new AuthService();
