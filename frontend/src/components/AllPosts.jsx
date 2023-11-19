import axios from "axios";
import { useEffect, useState } from "react";
import AddPost from "./AddPost";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/posts/");
    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="p-4">
        <div className="d-flex justify-content-center">
          <p className="posts-title">MY TRAVEL DIARY</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="posts-title2">
            BLOG <span className="ptitle-2">POSTS</span>
          </p>
          <br />
        </div>
      </div>
      <div className="mb-5 d-flex justify-content-end me-5 fs-5">
        <AddPost />
      </div>

      <div className="container-fluid">
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-4 mb-4">
              <img src={post.image} className="w-100 h-100" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
