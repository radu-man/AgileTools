import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ContentContainer from "./components/ContentContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estimation from "./pages/Estimation";
import Home from "./pages/Home";
import KnowledgeMap from "./pages/KnowledgeMap";
import RetroBoard from "./pages/RetroBoard";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <SideBar />
      <ContentContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/retroBoard" element={<RetroBoard />} />
          <Route path="/knowledge-map" element={<KnowledgeMap />} />
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  );
}

export default App;
