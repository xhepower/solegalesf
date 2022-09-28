import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
function Layout({ children }) {
  return (
    <div className="Layout">
      <Header></Header>
      {children}
    </div>
  );
}

export default Layout;
