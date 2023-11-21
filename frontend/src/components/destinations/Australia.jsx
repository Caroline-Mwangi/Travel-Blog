import { useEffect } from "react";

export default function Australia() {
  useEffect(() => {
    const carousel = new bootstrap.Carousel(
      document.getElementById("carouselExampleInterval")
    );
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-pause="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="images/destinations/aus1.jpg"
                    className="d-block w-100"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    src="images/destinations/aus2.jpg"
                    className="d-block w-100"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    src="images/destinations/aus3.jpg"
                    className="d-block w-100"
                  />
                </div>
              </div>
            </div>
            <div class="carousel-item " data-bs-interval="5000">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="images/destinations/aus4.jpg"
                    className="d-block w-100"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    src="images/destinations/aus5.jpg"
                    className="d-block w-100"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    src="images/destinations/aus6.jpg"
                    className="d-block w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="fw-bold fs-1 text-center mt-4 mb-4">AUSTRALIA</h1>
        <p className="fs-5 text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui dolor
          nisi debitis obcaecati sit suscipit laudantium, error maxime officiis
          optio distinctio minus eum quisquam deserunt dicta deleniti aspernatur
          excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis doloremque repudiandae sed sint doloribus mollitia? Voluptates
          aut, autem consequuntur nisi ipsum quod excepturi commodi magnam,
          praesentium tenetur possimus earum vel. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Tempore odio nulla architecto doloribus
          reiciendis recusandae quasi suscipit, mollitia quo debitis ad atque
          pariatur sunt, error in sapiente repudiandae possimus beatae!
        </p>
      </div>

      <div className="container">
        <div className="row dest-row mt-5">
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5 position-relative overflow-hidden">
            <div className=" overlay z-1 position-absolute h-100 bg-black bg-opacity-75"></div>
            <div className="z-2 text-white text-center position-absolute ">
              <p className="fw-bold dest-title">THE POST TITLE</p>
              <p className="text-secondary dest-date">The date</p>
            </div>
            <img src="images/destinations/aus1.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5 position-relative overflow-hidden">
            <div className=" overlay z-1 position-absolute h-100 bg-black bg-opacity-75"></div>
            <div className="z-2 text-white text-center position-absolute ">
              <p className="fw-bold dest-title">THE POST TITLE</p>
              <p className="text-secondary dest-date">The date</p>
            </div>
            <img src="images/destinations/aus5.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5 position-relative overflow-hidden">
            <div className=" overlay z-1 position-absolute h-100 bg-black bg-opacity-75"></div>
            <div className="z-2 text-white text-center position-absolute ">
              <p className="fw-bold dest-title">THE POST TITLE</p>
              <p className="text-secondary dest-date">The date</p>
            </div>
            <img src="images/destinations/aus3.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5 position-relative overflow-hidden">
            <div className=" overlay z-1 position-absolute h-100 bg-black bg-opacity-75"></div>
            <div className="z-2 text-white text-center position-absolute ">
              <p className="fw-bold dest-title">THE POST TITLE</p>
              <p className="text-secondary dest-date">The date</p>
            </div>
            <img src="images/destinations/aus2.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5 position-relative overflow-hidden">
            <div className=" overlay z-1 position-absolute h-100 bg-black bg-opacity-75"></div>
            <div className="z-2 text-white text-center position-absolute ">
              <p className="fw-bold dest-title">THE POST TITLE</p>
              <p className="text-secondary dest-date">The date</p>
            </div>
            <img src="images/destinations/aus4.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5 position-relative overflow-hidden">
            <div className=" overlay z-1 position-absolute h-100 bg-black bg-opacity-75"></div>
            <div className="z-2 text-white text-center position-absolute ">
              <p className="fw-bold dest-title">THE POST TITLE</p>
              <p className="text-secondary dest-date">The date</p>
            </div>
            <img src="images/destinations/aus6.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
