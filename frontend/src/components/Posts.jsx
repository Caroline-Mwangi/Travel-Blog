import axios from "axios";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/posts/");
    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const showThreePosts = posts.slice(-3);

  return (
    <>
      <div className="container-fluid">
        <div className="p-5">
          <div className="d-flex justify-content-center">
            <p className="posts-title">MY TRAVEL DIARY</p>
          </div>
          <div className="d-flex justify-content-center">
            <p className="posts-title2">
              BLOG <span className="ptitle-2">POSTS</span>
            </p>
            <br />
          </div>
        </div>

        {showThreePosts.map((post, index) => (
          <div key={index} className="row mt-2 mb-5">
            <div
              className={`col-xl-5 col-lg-5 col-md-4 col-sm-6 col-xs-12 ${
                index % 2 === 0 ? "" : "order-last"
              }`}
            >
              <img src={post.image} className="w-100 h-100 rounded" />
            </div>

            <div className="col-xl-7 col-lg-7 col-md-8 col-sm-6 col-xs-12 mt-3">
              <div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2vw"
                    height="2vw"
                    viewBox="0 5 40 40"
                    fill="none"
                  >
                    <path
                      d="M31.6667 6.66659H28.3333V4.99992C28.3333 4.55789 28.1577 4.13397 27.8452 3.82141C27.5326 3.50885 27.1087 3.33325 26.6667 3.33325C26.2246 3.33325 25.8007 3.50885 25.4882 3.82141C25.1756 4.13397 25 4.55789 25 4.99992V6.66659H15V4.99992C15 4.55789 14.8244 4.13397 14.5118 3.82141C14.1993 3.50885 13.7754 3.33325 13.3333 3.33325C12.8913 3.33325 12.4674 3.50885 12.1548 3.82141C11.8423 4.13397 11.6667 4.55789 11.6667 4.99992V6.66659H8.33333C7.00725 6.66659 5.73548 7.19337 4.7978 8.13105C3.86012 9.06873 3.33333 10.3405 3.33333 11.6666V31.6666C3.33333 32.9927 3.86012 34.2644 4.7978 35.2021C5.73548 36.1398 7.00725 36.6666 8.33333 36.6666H31.6667C32.9927 36.6666 34.2645 36.1398 35.2022 35.2021C36.1399 34.2644 36.6667 32.9927 36.6667 31.6666V11.6666C36.6667 10.3405 36.1399 9.06873 35.2022 8.13105C34.2645 7.19337 32.9927 6.66659 31.6667 6.66659ZM33.3333 31.6666C33.3333 32.1086 33.1577 32.5325 32.8452 32.8451C32.5326 33.1577 32.1087 33.3333 31.6667 33.3333H8.33333C7.89131 33.3333 7.46738 33.1577 7.15482 32.8451C6.84226 32.5325 6.66667 32.1086 6.66667 31.6666V19.9999H33.3333V31.6666ZM33.3333 16.6666H6.66667V11.6666C6.66667 11.2246 6.84226 10.8006 7.15482 10.4881C7.46738 10.1755 7.89131 9.99992 8.33333 9.99992H11.6667V11.6666C11.6667 12.1086 11.8423 12.5325 12.1548 12.8451C12.4674 13.1577 12.8913 13.3333 13.3333 13.3333C13.7754 13.3333 14.1993 13.1577 14.5118 12.8451C14.8244 12.5325 15 12.1086 15 11.6666V9.99992H25V11.6666C25 12.1086 25.1756 12.5325 25.4882 12.8451C25.8007 13.1577 26.2246 13.3333 26.6667 13.3333C27.1087 13.3333 27.5326 13.1577 27.8452 12.8451C28.1577 12.5325 28.3333 12.1086 28.3333 11.6666V9.99992H31.6667C32.1087 9.99992 32.5326 10.1755 32.8452 10.4881C33.1577 10.8006 33.3333 11.2246 33.3333 11.6666V16.6666Z"
                      fill="black"
                      fill-opacity="0.32"
                    />
                  </svg>
                  <span className="pst-date ms-2">{post.date}</span>
                </p>
                <h1 className="fw-bold fs-2">{post.title}</h1>
                <p className="pst-text">{post.content}</p>
                <button className="border-0 bg-transparent fw-bold">
                  <a
                    href="/post"
                    className="link-underline-light link-underline link-underline-opacity-0"
                  >
                    <span className="pst-btn ">Read More</span>
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2vw"
                    height="2vw"
                    viewBox="0 0 45 45"
                    fill="none"
                  >
                    <path
                      d="M33.75 13.2188C33.75 12.7215 33.5525 12.2446 33.2008 11.8929C32.8492 11.5413 32.3723 11.3438 31.875 11.3438L16.875 11.25C16.3777 11.25 15.9008 11.4475 15.5492 11.7992C15.1976 12.1508 15 12.6277 15 13.125C15 13.6223 15.1976 14.0992 15.5492 14.4508C15.9008 14.8025 16.3777 15 16.875 15H27.3L11.7938 30.5438C11.618 30.7181 11.4785 30.9254 11.3833 31.1539C11.2881 31.3824 11.2391 31.6275 11.2391 31.875C11.2391 32.1225 11.2881 32.3676 11.3833 32.5961C11.4785 32.8246 11.618 33.0319 11.7938 33.2062C11.9681 33.382 12.1754 33.5215 12.4039 33.6167C12.6324 33.7119 12.8775 33.7609 13.125 33.7609C13.3725 33.7609 13.6176 33.7119 13.8461 33.6167C14.0746 33.5215 14.282 33.382 14.4563 33.2062L30 17.6625V28.125C30 28.6223 30.1975 29.0992 30.5492 29.4508C30.9008 29.8025 31.3777 30 31.875 30C32.3723 30 32.8492 29.8025 33.2008 29.4508C33.5525 29.0992 33.75 28.6223 33.75 28.125V13.2188Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="d-flex justify-content-center p-5">
          <button className="border-0 bg-transparent fw-bold">
            <span className="ld-pst-btn">Load More</span>
          </button>
        </div>
      </div>
    </>
  );
}
