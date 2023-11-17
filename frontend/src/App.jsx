import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Africa from "./components/destinations/Africa";
import Europe from "./components/destinations/Europe";
import Asia from "./components/destinations/Asia";
import NAmerica from "./components/destinations/NAmerica";
import SAmerica from "./components/destinations/SAmerica";
import Antarctica from "./components/destinations/Antarctica";
import Australia from "./components/destinations/Australia";
import AllPosts from "./components/AllPosts";
import AddPost from "./components/AddPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/africa" element={<Africa />} />
          <Route path="/europe" element={<Europe />} />
          <Route path="/asia" element={<Asia />} />
          <Route path="/northamerica" element={<NAmerica />} />
          <Route path="/southamerica" element={<SAmerica />} />
          <Route path="/antarctica" element={<Antarctica />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/posts" element={<AllPosts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
