import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Detail from "./Detail";
import Header from "./Header";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/:title" Component={Detail} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
