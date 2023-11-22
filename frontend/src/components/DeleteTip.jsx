import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteTip() {

    const navigate = useNavigate();

    const {id} = useParams();

    const deleteTip = async () => {
        await axios.delete(`http://127.0.0.1:8000/tips/${id}/`);
        navigate("/");
    }
  return (
    <>
      <button
        type="button"
        className="border-0 bg-transparent "
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2vw"
          height="2vh"
          viewBox="0 0 24 18"
          fill="none"
        >
          <path
            d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
            fill="red"
            fillOpacity="0.5"
          />
        </svg>
      </button>

      <div
        className="modal fade  "
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                DELETE THIS TIP
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you sure you want to delete this tip?</div>
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
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={deleteTip}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
