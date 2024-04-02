import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import TopRated from "./Pages/TopRated/TopRated";
import Upcoming from "./Pages/Upcoming/Upcoming";
import SingleMovieDetail from "./Pages/SingleMovieDetail/SingleMovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/SingleMovieDetail/:movieId" element={<SingleMovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
