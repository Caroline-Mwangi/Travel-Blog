import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  return (
    <>
      <button
        type="button"
        class="btn btn-link link-underline link-underline-opacity-0 opacity-50 fw-bold fs-5 link-underline-opacity-50-hover link-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        + CREATE NEW POST
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
                ADD A NEW POST
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
                className="form-control"
                placeholder="Image"
                name="image"
              />
              <input
                type="text"
                className="form-control mt-3 mb-3 "
                placeholder="Blog Title..."
                name="title"
              />
              <input
                type="text"
                className="form-control mt-3 mb-3 "
                placeholder="Continent..."
                name="continent"
              />
              <input
                type="text"
                className="form-control mt-3 mb-3 "
                placeholder="Location..."
                name="location"
              />
              <textarea
                className="form-control mt-3 mb-3 "
                placeholder="Content..."
                name="content"
                rows="50"
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
              <button type="button" class="btn btn-primary">
                Add Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
