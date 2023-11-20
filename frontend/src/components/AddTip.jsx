import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTip() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const AddTipInfo = async () => {
    let field = new FormData();

    field.append("title", title);
    field.append("content", content);

    if (image != null) {
      field.append("image", image);
    }

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/tips/",
      data: field,
    }).then((response) => {
      navigate("/");
    });
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-link link-underline link-underline-opacity-0 opacity-50 fw-bold fs-5 link-underline-opacity-50-hover link-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        + ADD NEW TIP
      </button>

      <div
        class="modal fade  "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                ADD A NEW TIP
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
                placeholder="Tip Title..."
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />

              <textarea
                className="form-control mt-3 mb-3 border-black"
                placeholder="Content..."
                name="content"
                rows="20"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={AddTipInfo}
                data-bs-dismiss="modal"
              >
                Add Tip
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
