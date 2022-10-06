import { useEffect, useState } from "react";

const useLogin = (data) => {
  const [token, setToken] = useState([]);
  useEffect(() => {
    authService.login(data).then((response) => {
      if (response.data.token) {
        setToken(response.data.token);
      }
    });
  }, []);

  return token;
};

export default useLogin;
