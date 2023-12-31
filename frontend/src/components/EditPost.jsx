import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [continent, setContinent] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  let getPost = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/posts/${id}/`);

    setImage(result.data.image);
    setTitle(result.data.title);
    setContinent(result.data.continent);
    setLocation(result.data.location);
    setContent(result.data.content);
  };

  useEffect(() => {
    getPost();
  }, []);

  const editAPost = async () => {
    let field = new FormData();

    field.append("title", title);
    field.append("continent", continent);
    field.append("location", location);
    field.append("content", content);

    if (image !== null) {
      field.append("image", image);
    }

    await axios({
      method: "PUT",
      url: `http://127.0.0.1:8000/posts/${id}/`,
      data: field,
    }).then((response) => {
      navigate(`/posts/${id}`);
      window.location.reload();
    });
  };
  return (
    <>
      <button
        className="border-0 bg-transparent"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2vw"
          height="2vh"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C20.8027 6.94749 20.8763 6.8376 20.9264 6.71663C20.9766 6.59565 21.0024 6.46597 21.0024 6.335C21.0024 6.20403 20.9766 6.07435 20.9264 5.95338C20.8763 5.83241 20.8027 5.72252 20.71 5.63L18.37 3.29C18.2775 3.1973 18.1676 3.12375 18.0466 3.07357C17.9257 3.02339 17.796 2.99756 17.665 2.99756C17.534 2.99756 17.4043 3.02339 17.2834 3.07357C17.1624 3.12375 17.0525 3.1973 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
            fill="blue"
            fillOpacity="0.6"
          />
        </svg>
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
                EDIT POST
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={image} className="w-50 h-50" />
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <select
                className="form-control mt-3 mb-3 border-black "
                name="continent"
                onChange={(e) => setContinent(e.target.value)}
              >
                <option value={continent}>{continent}</option>
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <textarea
                className="form-control mt-3 mb-3 border-black"
                placeholder="Content..."
                name="content"
                rows="50"
                value={content}
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
                data-bs-dismiss="modal"
                onClick={editAPost}
              >
                Edit Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
