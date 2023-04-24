import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./Create";

import Detail from "./Detail";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="create" Component={Create} />
          <Route path="edit/:title" Component={Create} />
          <Route path="detail/:title" Component={Detail} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
