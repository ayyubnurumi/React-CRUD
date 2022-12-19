import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Create } from "./components/create";
import { Read } from "./components/read";
import { Update } from "./components/update";

const LayOut = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React CRUD Operations</h1>
        <ul>
          <li><a href="/create">create</a></li>
          <li><a href="/read">read</a></li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
