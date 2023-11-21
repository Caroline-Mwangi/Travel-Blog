import axios from "axios";
import { useEffect, useState } from "react";
import AddPost from "./AddPost";
import { Link } from "react-router-dom";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/posts/");
    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  document.title = "Travel Blog | Posts ";

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
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="image-posts">
                <Link to={`/posts/${post.id}`}>
                  <div className="overlay-posts">
                    <div className="overlay-posts-title">
                      <p className="fw-bold">{post.title}</p>
                      <p className="opacity-50">{post.location}</p>
                    </div>
                  </div>
                  <img src={post.image} className="w-100 h-100" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
