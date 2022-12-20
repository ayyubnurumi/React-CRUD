import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Create } from "./components/create";
import { Read } from "./components/read";
import { Update } from "./components/update";
import "./App.css";

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
          <Route index path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/" element={<Navigate to="/read" />} replace />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
