import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [continent, setContinent] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const AddPostInfo = async () => {
    let field = new FormData();

    field.append("title", title);
    field.append("continent", continent);
    field.append("location", location);
    field.append("content", content);

    if (image != null) {
      field.append("image", image);
    }

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/posts/",
      data: field,
    }).then((response) => {
      navigate("/posts");
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-link link-underline link-underline-opacity-0 opacity-75 fw-bold fs-5 link-underline-opacity-50-hover link-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        + CREATE NEW POST
      </button>

      <div
        className="modal fade  "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                ADD A NEW POST
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src=" " alt="" />
              <input
                type="file"
                className="form-control border-black"
                accept=".png, .jpeg, .jpg"
                placeholder="Image"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <input
                type="text"
                className="form-control mt-3 mb-3 border-black "
                placeholder="Blog Title..."
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <select
                className="form-control mt-3 mb-3 border-black "
                name="continent"
                onChange={(e) => setContinent(e.target.value)}
              >
                <option value="--Click to select a continent--">
                  --Click to select a continent--
                </option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Australia">Australia</option>
              </select>

              <input
                type="text"
                className="form-control mt-3 mb-3 border-black "
                placeholder="Location..."
                name="location"
                onChange={(e) => setLocation(e.target.value)}
              />
              <textarea
                className="form-control mt-3 mb-3 border-black"
                placeholder="Content..."
                name="content"
                rows="50"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={AddPostInfo}
                data-bs-dismiss="modal"
              >
                Add Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
