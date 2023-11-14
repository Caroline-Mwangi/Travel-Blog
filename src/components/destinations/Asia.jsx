import { useEffect } from "react";

export default function Asia() {
  useEffect(() => {
    const carousel = new bootstrap.Carousel(
      document.getElementById("carouselExampleInterval")
    );
  }, []);
  return (
    <>
      <div className="container">
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
                    src="images/destinations/asia1.jpg"
                    className="d-block w-100"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    src="images/destinations/asia2.jpg"
                    className="d-block w-100"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    src="images/destinations/asia3.jpg"
                    className="d-block w-100"
                  />
                </div>
              </div>
            </div>
            <div class="carousel-item " data-bs-interval="5000">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="images/destinations/asia4.jpg"
                    className="d-block w-100"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    src="images/destinations/asia5.jpg"
                    className="d-block w-100"
                  />
                </div>
                <div className="col-md-4">
                  <img
                    src="images/destinations/asia6.jpg"
                    className="d-block w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="fw-bold fs-1 text-center mt-4 mb-4">ASIA</h1>
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
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5">
            <img src="images/destinations/asia1.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5">
            <img src="images/destinations/asia5.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5">
            <img src="images/destinations/asia3.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5">
            <img src="images/destinations/asia2.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5">
            <img src="images/destinations/asia4.jpg" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-3 mb-5">
            <img src="images/destinations/asia6.jpg" />
          </div>
          
        </div>
      </div>
    </>
  );
}
