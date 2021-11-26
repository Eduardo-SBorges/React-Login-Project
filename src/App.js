import React from "react";
import GlobalStyle from "./assets/GlobalStyle";
import Home from "./screen/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/Login";
import ProtectedRoute from "./components/helper/ProtectedRoute";
import { UserStorage } from "./UserContext";

const App = () => {
  return (
    <>
      <HashRouter>
        <UserStorage>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Login />} />
            <ProtectedRoute path="/home" element={<Home />} />
          </Routes>
        </UserStorage>
      </HashRouter>
    </>
  );
};

export default App;
