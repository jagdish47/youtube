import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import VideoDetails from "./components/VideoDetails";
import searchResults from "./components/SearchResults";

import { AppContext } from "./context.js/contextApi";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="text-2xl">Welcome to Youtube...</div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route
            path="/searchResult/:searchQuery"
            element={<searchResults />}
          />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
