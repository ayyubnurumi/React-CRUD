import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

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
  const [navbar, setnavbar] = useState(0);
  const setnavbar0 = () => setnavbar(0);
  const setnavbar1 = () => setnavbar(1);
  const setnavbar2 = () => setnavbar(2);
  console.log(navbar);
  return (
        <Routes>
          <Route path="/" element={<Navbar navbar={navbar} setnavbar={setnavbar0} />}>
            <Route path="/" element={<Home setnavbar1={setnavbar1} setnavbar2={setnavbar2} />} />

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
