import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Cuentas from "@pages/Cuentas";
import Layout from "@containers/Layout";
import AppContext from "@context/AppContext";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/cuentas"
          element={
            <Layout>
              <Cuentas />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
