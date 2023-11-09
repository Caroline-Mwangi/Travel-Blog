export default function Tips() {
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
            class="carousel carousel-dark slide carousel-tips"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item active carousel-item-tips"
                data-bs-interval="2000"
              >
                <div className="row">
                  <div className="col-md-4">
                    <div class="card">
                      <img src="images/tips1.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title fw-bold fs-2 text-uppercase">
                          Some Kind Of Title Related To The Tip
                        </h5>
                        <p class="card-text fs-5 opacity-50">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div class="card">
                      <img src="images/tips2.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title fw-bold fs-2 text-uppercase">
                          Some Kind Of Title Related To The Tip
                        </h5>
                        <p class="card-text fs-5 opacity-50">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div class="card">
                      <img src="images/tips3.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title fw-bold fs-2 text-uppercase">
                          Some Kind Of Title Related To The Tip
                        </h5>
                        <p class="card-text fs-5 opacity-50">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="carousel-item carousel-item-tips"
                data-bs-interval="2000"
              >
                <div className="row">
                  <div className="col-md-4">
                    <div class="card">
                      <img src="images/tips2.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title fw-bold fs-2 text-uppercase">
                          Some Kind Of Title Related To The Tip
                        </h5>
                        <p class="card-text fs-5 opacity-50">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card">
                      <img src="images/tips3.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title fw-bold fs-2 text-uppercase">
                          Some Kind Of Title Related To The Tip
                        </h5>
                        <p class="card-text fs-5 opacity-50">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card">
                      <img src="images/tips1.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title fw-bold fs-2 text-uppercase">
                          Some Kind Of Title Related To The Tip
                        </h5>
                        <p class="card-text fs-5 opacity-50">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item carousel-item-tips">
                <div className="row">
                  <div className="col-md-4">
                    <div class="card">
                      <img src="images/tips3.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title fw-bold fs-2 text-uppercase">
                          Some Kind Of Title Related To The Tip
                        </h5>
                        <p class="card-text fs-5 opacity-50">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card">
                      <img src="images/tips1.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title fw-bold fs-2 text-uppercase">
                          Some Kind Of Title Related To The Tip
                        </h5>
                        <p class="card-text fs-5 opacity-50">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card">
                      <img src="images/tips2.jpg" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title fw-bold fs-2 text-uppercase">
                          Some Kind Of Title Related To The Tip
                        </h5>
                        <p class="card-text fs-5 opacity-50">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
