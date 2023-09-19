import React from "react";
import Header from "./components/Header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Questions from "../src/components/Header/Questions.jsx";
import Materials from "../src/components/Header/materials.jsx";
import Contacts from "../src/components/Header/contacts.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
