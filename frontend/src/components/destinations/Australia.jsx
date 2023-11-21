import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Australia() {
  const [posts, setPosts] = useState([]);

  const getAustraliaPosts = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/posts/?continent=Australia"
    );
    setPosts(response.data);
  };

  useEffect(() => {
    getAustraliaPosts();
  }, []);

  useEffect(() => {
    const carousel = new bootstrap.Carousel(
      document.getElementById("carouselExampleInterval")
    );
  }, []);

  document.title = "Travel Blog | Australia ";
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
          {posts.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="image-posts">
                <Link to={`/posts/${post.id}`}>
                  <div className="overlay-posts">
                    <div className="overlay-dest-title">
                      <p className="fw-bold">{post.title}</p>
                      <p className="opacity-50">{post.location}</p>
                    </div>
                  </div>
                  <img src={post.image} className="w-100 h-100" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
