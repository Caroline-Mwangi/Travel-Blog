import axios from "axios";
import { useState, useEffect } from "react";
import AddTip from "./AddTip";

export default function Tips() {
  const [tips, setTips] = useState([]);
  const getTips = async () => {
    const response = await axios.get("http://127.0.0.1:8000/tips/");
    setTips(response.data);
  };

  useEffect(() => {
    getTips();
  }, []);

  const getThreeTips = () => {
    const threeTips = [];
    for (let i = 0; i < tips.length; i += 3) {
      threeTips.push(tips.slice(i, i + 3));
    }
    return threeTips;
  };

  const threeTips = getThreeTips();
  return (
    <>
    <div className="container-fluid tips">
      <div>
        <div className="d-flex justify-content-center">
          <p className="posts-title">MY TRAVEL DIARY</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="posts-title2">
            TRAVEL <span className="ptitle-2">TIPS</span>
          </p>
          <br />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide carousel-tips"
        >
          <div className="carousel-inner">
            {threeTips.map((tipGroup, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''} carousel-item-tips`}
                data-bs-interval="2000"
              >
                <div className="row">
                  {tipGroup.map((tip, tipIndex) => (
                    <div key={tipIndex} className="col-md-4">
                      <div className="card">
                        <img src={tip.image} className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title fw-bold fs-3 text-uppercase">
                            {tip.title}
                          </h5>
                          <p className="tip-txt card-text opacity-50">{tip.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="mb-5 d-flex justify-content-center me-5 fs-5">
        <AddTip/>
      </div>
    </div>
  </>
  );
}
