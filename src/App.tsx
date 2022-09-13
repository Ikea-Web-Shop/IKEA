import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./Components";

import {
  About,
  Home,
} from "./Pages/Main";

import MainLayout from "./Layouts/MainLayout/MainLayout";





function App() {
  return (
    <>
      <Router>
      <ScrollToTop>
        <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          </Route>
          

         
         
         
           
          
        </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
