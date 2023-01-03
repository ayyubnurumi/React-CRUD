import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

// pages crud 1
import { Create } from "./components-crud1/create";
import { Read } from "./components-crud1/read";
import { Update } from "./components-crud1/update";
// pages crud 2
import { TutorialsList } from "./components-crud2/TutorialsList";
import { AddTutorial } from "./components-crud2/AddTutorial";
import { Tutorial } from "./components-crud2/Tutorial";
// main page
import { Home } from "./main/Home";
import Navbar from "./main/Navbar";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [navbar, setnavbar] = useState();
  useEffect(() => {
    setnavbar(JSON.parse(localStorage.getItem('setnavbar')));
    localStorage.removeItem('setnavbar')
  }, []);

  return (
        <Routes>
          <Route path="/" element={<Navbar navbar={navbar} />}>
            <Route path="/" element={<Home />} />

            {/* crud1 */}
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />

            {/* crud2 */}
            <Route path="/tutorials" element={<TutorialsList />} />
            <Route path="/add" element={<AddTutorial />} />
            <Route path="/tutorials/:id" element={<Tutorial />} />
          </Route>
        </Routes>
  );
}

export default App;
