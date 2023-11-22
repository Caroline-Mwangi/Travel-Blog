import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const carousel = new bootstrap.Carousel(
      document.getElementById("carouselExampleInterval")
    );
  }, []);
  return (
    <>
      <div className="container-fluid ">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-pause="false"
        >
          <div className="carousel-inner carousel-header position-relative ">
            <div className="z-1 position-absolute w-100 h-100 bg-black bg-opacity-50"></div>
            <div className="z-2 text-white text-center position-absolute top-50 start-50 translate-middle">
              <p className="carousel-par">
                <span className="title-1">MY TRAVEL DIARY</span> <br /> <br />{" "}
                <br />
                <span className="title-2">ADVENTURE OF A LIFETIME</span>
                <br />
                <br />
                <br />
                <span>
                  <button className="btn btn-light mt-3 car-btn">
                    <a href="/posts" className="link-underline link-underline-opacity-0 text-black">EXPLORE POSTS</a>
                  </button>
                </span>
              </p>
            </div>
            <div className="carousel-item active" data-bs-interval="5000">
              <img src="images/hero1.jpg" className="d-block w-100" />
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <div className="position-absolute w-100 h-100 bg-black bg-opacity-50"></div>
              <img src="images/hero2.jpg" className="d-block w-100" />
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <div className="position-absolute w-100 h-100 bg-black bg-opacity-50"></div>
              <img src="images/hero3.jpg" className="d-block w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
