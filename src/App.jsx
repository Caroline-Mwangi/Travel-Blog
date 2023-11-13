import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Africa from "./components/destinations/Africa"
import Europe from "./components/destinations/Europe";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post/>}/>
          <Route path="/africa" element={<Africa/>}/>
          <Route path="/europe" element={<Europe/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
