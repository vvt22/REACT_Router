import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  //this is older way of router
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          {/* navlink provides an extra class in anchor tag  */}
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
