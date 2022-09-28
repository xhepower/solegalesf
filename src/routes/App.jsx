import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.scss";
import NewPassword from "../pages/NewPassword";
import PasswordRecovery from "../pages/PasswordRecovery";
import SendEmail from "../pages/SendEmail";
import MyAccount from "../pages/MyAccount";
import Checkout from "../pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes></Routes>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/password-recovery"
            element={<PasswordRecovery />}
          />
          <Route exact path="/send-email" element={<SendEmail />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route exact path="/account" element={<MyAccount />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
