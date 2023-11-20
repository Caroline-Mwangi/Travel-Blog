import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeletePost from "./deletePost";
import EditPost from "./EditPost";

export default function Post() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getAPost = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/posts/${id}/`);
    setPost(data);
  };

  useEffect(() => {
    getAPost();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="container mb-4">
          <img src={post.image} class="d-block w-100 post-header mb-2" />
          <div className="d-flex justify-content-between">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2vw"
                height="2vw"
                viewBox="-12 -2 55 55"
                fill="none"
              >
                <path
                  d="M31.6667 6.66659H28.3333V4.99992C28.3333 4.55789 28.1577 4.13397 27.8452 3.82141C27.5326 3.50885 27.1087 3.33325 26.6667 3.33325C26.2246 3.33325 25.8007 3.50885 25.4882 3.82141C25.1756 4.13397 25 4.55789 25 4.99992V6.66659H15V4.99992C15 4.55789 14.8244 4.13397 14.5118 3.82141C14.1993 3.50885 13.7754 3.33325 13.3333 3.33325C12.8913 3.33325 12.4674 3.50885 12.1548 3.82141C11.8423 4.13397 11.6667 4.55789 11.6667 4.99992V6.66659H8.33333C7.00725 6.66659 5.73548 7.19337 4.7978 8.13105C3.86012 9.06873 3.33333 10.3405 3.33333 11.6666V31.6666C3.33333 32.9927 3.86012 34.2644 4.7978 35.2021C5.73548 36.1398 7.00725 36.6666 8.33333 36.6666H31.6667C32.9927 36.6666 34.2645 36.1398 35.2022 35.2021C36.1399 34.2644 36.6667 32.9927 36.6667 31.6666V11.6666C36.6667 10.3405 36.1399 9.06873 35.2022 8.13105C34.2645 7.19337 32.9927 6.66659 31.6667 6.66659ZM33.3333 31.6666C33.3333 32.1086 33.1577 32.5325 32.8452 32.8451C32.5326 33.1577 32.1087 33.3333 31.6667 33.3333H8.33333C7.89131 33.3333 7.46738 33.1577 7.15482 32.8451C6.84226 32.5325 6.66667 32.1086 6.66667 31.6666V19.9999H33.3333V31.6666ZM33.3333 16.6666H6.66667V11.6666C6.66667 11.2246 6.84226 10.8006 7.15482 10.4881C7.46738 10.1755 7.89131 9.99992 8.33333 9.99992H11.6667V11.6666C11.6667 12.1086 11.8423 12.5325 12.1548 12.8451C12.4674 13.1577 12.8913 13.3333 13.3333 13.3333C13.7754 13.3333 14.1993 13.1577 14.5118 12.8451C14.8244 12.5325 15 12.1086 15 11.6666V9.99992H25V11.6666C25 12.1086 25.1756 12.5325 25.4882 12.8451C25.8007 13.1577 26.2246 13.3333 26.6667 13.3333C27.1087 13.3333 27.5326 13.1577 27.8452 12.8451C28.1577 12.5325 28.3333 12.1086 28.3333 11.6666V9.99992H31.6667C32.1087 9.99992 32.5326 10.1755 32.8452 10.4881C33.1577 10.8006 33.3333 11.2246 33.3333 11.6666V16.6666Z"
                  fill="black"
                  fill-opacity="0.32"
                />
              </svg>
              <span className="opacity-50 fs-5">{post.date}</span>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2vw"
                height="2vw"
                viewBox="-8 0 30 30"
                fill="none"
              >
                <path
                  d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                  fill="black"
                  fill-opacity="0.32"
                />
              </svg>
              <span className="opacity-50 fs-5">{post.location}</span>
            </p>
          </div>
        </div>

        <div className="container">
          <h1 className="fw-bold fs-1 text-center mt-4 mb-5">{post.title}</h1>
          <p className=" fs-5 opacity-75">
            {post.content}
            <br />
            <br />
          </p>
        </div>

        <div className="d-flex justify-content-between ms-4 me-4">
          <div>
            <EditPost/>

            <DeletePost/> 
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2vw"
              height="2vh"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_53_2)">
                <path
                  d="M32.9217 7.765C33.0658 7.60019 33.176 7.40861 33.2461 7.20119C33.3162 6.99377 33.3448 6.77458 33.3301 6.55613C33.3155 6.33768 33.258 6.12425 33.1609 5.92803C33.0638 5.7318 32.929 5.55663 32.7642 5.4125C32.5994 5.26837 32.4078 5.15812 32.2004 5.08804C31.9929 5.01795 31.7737 4.98941 31.5553 5.00403C31.3368 5.01866 31.1234 5.07617 30.9272 5.17327C30.731 5.27038 30.5558 5.40519 30.4117 5.57L21.895 15.3033L14.6667 5.66667C14.5114 5.45967 14.3101 5.29167 14.0787 5.17595C13.8473 5.06024 13.5921 5 13.3333 5H6.66667C6.35715 5 6.05374 5.08619 5.79045 5.24892C5.52716 5.41164 5.31438 5.64447 5.17596 5.92131C5.03753 6.19815 4.97894 6.50807 5.00674 6.81634C5.03453 7.12461 5.14762 7.41905 5.33333 7.66667L16.0617 21.97L7.07833 32.2367C6.93421 32.4015 6.82396 32.5931 6.75387 32.8005C6.68378 33.0079 6.65524 33.2271 6.66987 33.4455C6.68449 33.664 6.742 33.8774 6.83911 34.0736C6.93622 34.2699 7.07102 34.445 7.23583 34.5892C7.40064 34.7333 7.59223 34.8435 7.79964 34.9136C8.00706 34.9837 8.22625 35.0123 8.4447 34.9976C8.66315 34.983 8.87658 34.9255 9.07281 34.8284C9.26903 34.7313 9.44421 34.5965 9.58833 34.4317L18.105 24.6967L25.3333 34.3333C25.4886 34.5403 25.6899 34.7083 25.9213 34.824C26.1527 34.9398 26.4079 35 26.6667 35H33.3333C33.6429 35 33.9463 34.9138 34.2096 34.7511C34.4728 34.5884 34.6856 34.3555 34.824 34.0787C34.9625 33.8018 35.0211 33.4919 34.9933 33.1837C34.9655 32.8754 34.8524 32.5809 34.6667 32.3333L23.9383 18.03L32.9217 7.765Z"
                  fill="black"
                  fillOpacity="0.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_53_2">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2vw"
              height="2vh"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M5 18.3333C5 12.0483 5 8.905 6.95333 6.95333C8.905 5 12.0483 5 18.3333 5H21.6667C27.9517 5 31.095 5 33.0467 6.95333C35 8.905 35 12.0483 35 18.3333V21.6667C35 27.9517 35 31.095 33.0467 33.0467C31.095 35 27.9517 35 21.6667 35H18.3333C12.0483 35 8.905 35 6.95333 33.0467C5 31.095 5 27.9517 5 21.6667V18.3333Z"
                stroke="black"
                stroke-width="2"
                strokeOpacity="0.5"
              />
              <path
                d="M27.5 15C28.8807 15 30 13.8807 30 12.5C30 11.1193 28.8807 10 27.5 10C26.1193 10 25 11.1193 25 12.5C25 13.8807 26.1193 15 27.5 15Z"
                fill="black"
                fillOpacity="0.5"
              />
              <path
                d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
                stroke="black"
                stroke-width="2"
                strokeOpacity="0.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2vw"
              height="2vh"
              viewBox="0 0 35 40"
              fill="none"
            >
              <path
                d="M31.75 8.18335C30.222 6.63989 28.4019 5.41613 26.396 4.58344C24.3901 3.75074 22.2385 3.32579 20.0666 3.33335C10.9666 3.33335 3.54996 10.75 3.54996 19.85C3.54996 22.7667 4.31663 25.6 5.74996 28.1L3.41663 36.6667L12.1666 34.3667C14.5833 35.6834 17.3 36.3833 20.0666 36.3833C29.1666 36.3833 36.5833 28.9667 36.5833 19.8667C36.5833 15.45 34.8666 11.3 31.75 8.18335ZM20.0666 33.5833C17.6 33.5833 15.1833 32.9167 13.0666 31.6667L12.5666 31.3667L7.36663 32.7333L8.74996 27.6667L8.41663 27.15C7.0462 24.9616 6.31853 22.4321 6.31663 19.85C6.31663 12.2834 12.4833 6.11668 20.05 6.11668C23.7166 6.11668 27.1666 7.55002 29.75 10.15C31.0291 11.4233 32.0428 12.9378 32.7323 14.6057C33.4218 16.2737 33.7733 18.0619 33.7666 19.8667C33.8 27.4333 27.6333 33.5833 20.0666 33.5833ZM27.6 23.3167C27.1833 23.1167 25.15 22.1167 24.7833 21.9667C24.4 21.8334 24.1333 21.7667 23.85 22.1667C23.5666 22.5834 22.7833 23.5167 22.55 23.7834C22.3166 24.0667 22.0666 24.1 21.65 23.8833C21.2333 23.6833 19.9 23.2334 18.3333 21.8334C17.1 20.7334 16.2833 19.3834 16.0333 18.9667C15.8 18.55 16 18.3333 16.2166 18.1167C16.4 17.9333 16.6333 17.6333 16.8333 17.4C17.0333 17.1667 17.1166 16.9833 17.25 16.7167C17.3833 16.4333 17.3166 16.2 17.2166 16C17.1166 15.8 16.2833 13.7667 15.95 12.9334C15.6166 12.1334 15.2666 12.2334 15.0166 12.2167H14.2166C13.9333 12.2167 13.5 12.3167 13.1166 12.7334C12.75 13.15 11.6833 14.15 11.6833 16.1834C11.6833 18.2167 13.1666 20.1834 13.3666 20.45C13.5666 20.7334 16.2833 24.9 20.4166 26.6834C21.4 27.1167 22.1666 27.3667 22.7666 27.55C23.75 27.8667 24.65 27.8167 25.3666 27.7167C26.1666 27.6 27.8166 26.7167 28.15 25.75C28.5 24.7833 28.5 23.9667 28.3833 23.7834C28.2666 23.6 28.0166 23.5167 27.6 23.3167Z"
                fill="black"
                fillOpacity="0.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2vw"
              height="2vh"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M23.3333 22.5H27.5L29.1666 15.8333H23.3333V12.5C23.3333 10.7833 23.3333 9.16665 26.6666 9.16665H29.1666V3.56665C28.6233 3.49498 26.5716 3.33331 24.405 3.33331C19.88 3.33331 16.6666 6.09498 16.6666 11.1666V15.8333H11.6666V22.5H16.6666V36.6666H23.3333V22.5Z"
                fill="black"
                fillOpacity="0.5"
              />
            </svg>{" "}
          </div>
        </div>
        <hr />

        <div className="container">
          <h1 className="fw-bold fs-1 mt-5 mb-5">COMMENTS</h1>
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
              <img
                src="/images/comment1.jpg"
                width="170"
                height="170"
                className="rounded-circle img-fluid"
              />
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-7">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7vw"
                  height="1.7vw"
                  viewBox="0 5 45 40"
                  fill="none"
                >
                  <path
                    d="M31.6667 6.66659H28.3333V4.99992C28.3333 4.55789 28.1577 4.13397 27.8452 3.82141C27.5326 3.50885 27.1087 3.33325 26.6667 3.33325C26.2246 3.33325 25.8007 3.50885 25.4882 3.82141C25.1756 4.13397 25 4.55789 25 4.99992V6.66659H15V4.99992C15 4.55789 14.8244 4.13397 14.5118 3.82141C14.1993 3.50885 13.7754 3.33325 13.3333 3.33325C12.8913 3.33325 12.4674 3.50885 12.1548 3.82141C11.8423 4.13397 11.6667 4.55789 11.6667 4.99992V6.66659H8.33333C7.00725 6.66659 5.73548 7.19337 4.7978 8.13105C3.86012 9.06873 3.33333 10.3405 3.33333 11.6666V31.6666C3.33333 32.9927 3.86012 34.2644 4.7978 35.2021C5.73548 36.1398 7.00725 36.6666 8.33333 36.6666H31.6667C32.9927 36.6666 34.2645 36.1398 35.2022 35.2021C36.1399 34.2644 36.6667 32.9927 36.6667 31.6666V11.6666C36.6667 10.3405 36.1399 9.06873 35.2022 8.13105C34.2645 7.19337 32.9927 6.66659 31.6667 6.66659ZM33.3333 31.6666C33.3333 32.1086 33.1577 32.5325 32.8452 32.8451C32.5326 33.1577 32.1087 33.3333 31.6667 33.3333H8.33333C7.89131 33.3333 7.46738 33.1577 7.15482 32.8451C6.84226 32.5325 6.66667 32.1086 6.66667 31.6666V19.9999H33.3333V31.6666ZM33.3333 16.6666H6.66667V11.6666C6.66667 11.2246 6.84226 10.8006 7.15482 10.4881C7.46738 10.1755 7.89131 9.99992 8.33333 9.99992H11.6667V11.6666C11.6667 12.1086 11.8423 12.5325 12.1548 12.8451C12.4674 13.1577 12.8913 13.3333 13.3333 13.3333C13.7754 13.3333 14.1993 13.1577 14.5118 12.8451C14.8244 12.5325 15 12.1086 15 11.6666V9.99992H25V11.6666C25 12.1086 25.1756 12.5325 25.4882 12.8451C25.8007 13.1577 26.2246 13.3333 26.6667 13.3333C27.1087 13.3333 27.5326 13.1577 27.8452 12.8451C28.1577 12.5325 28.3333 12.1086 28.3333 11.6666V9.99992H31.6667C32.1087 9.99992 32.5326 10.1755 32.8452 10.4881C33.1577 10.8006 33.3333 11.2246 33.3333 11.6666V16.6666Z"
                    fill="black"
                    fill-opacity="0.32"
                  />
                </svg>
                <span className="fs-5 opacity-50">November 12, 2020</span>
              </p>
              <h2 className="fw-bold fs-5">SOME NAME</h2>
              <p className="pst-text fs-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                esse sit quae sed. Temporibus, sit sint porro repudiandae eius
                dolorem soluta, velit ducimus a quisquam minima placeat aliquid
                doloribus obcaecati! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Commodi nesciunt voluptatem sed quae vel
                adipisci, et nobis blanditiis esse, omnis fuga.
              </p>
              <button className="border-0 bg-transparent fw-bold">
                <a
                  href="/post"
                  className="link-underline-light link-underline link-underline-opacity-0 link-opacity-hover-50"
                >
                  <span className="text-black ">Reply</span>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2vw"
                  height="2vw"
                  viewBox="0 0 80 50"
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

          <div className="row mt-5 mb-5">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
              <img
                src="/images/comment2.jpg"
                width="170"
                height="120"
                className="rounded-circle img-fluid"
              />
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-7">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7vw"
                  height="1.7vw"
                  viewBox="0 5 45 40"
                  fill="none"
                >
                  <path
                    d="M31.6667 6.66659H28.3333V4.99992C28.3333 4.55789 28.1577 4.13397 27.8452 3.82141C27.5326 3.50885 27.1087 3.33325 26.6667 3.33325C26.2246 3.33325 25.8007 3.50885 25.4882 3.82141C25.1756 4.13397 25 4.55789 25 4.99992V6.66659H15V4.99992C15 4.55789 14.8244 4.13397 14.5118 3.82141C14.1993 3.50885 13.7754 3.33325 13.3333 3.33325C12.8913 3.33325 12.4674 3.50885 12.1548 3.82141C11.8423 4.13397 11.6667 4.55789 11.6667 4.99992V6.66659H8.33333C7.00725 6.66659 5.73548 7.19337 4.7978 8.13105C3.86012 9.06873 3.33333 10.3405 3.33333 11.6666V31.6666C3.33333 32.9927 3.86012 34.2644 4.7978 35.2021C5.73548 36.1398 7.00725 36.6666 8.33333 36.6666H31.6667C32.9927 36.6666 34.2645 36.1398 35.2022 35.2021C36.1399 34.2644 36.6667 32.9927 36.6667 31.6666V11.6666C36.6667 10.3405 36.1399 9.06873 35.2022 8.13105C34.2645 7.19337 32.9927 6.66659 31.6667 6.66659ZM33.3333 31.6666C33.3333 32.1086 33.1577 32.5325 32.8452 32.8451C32.5326 33.1577 32.1087 33.3333 31.6667 33.3333H8.33333C7.89131 33.3333 7.46738 33.1577 7.15482 32.8451C6.84226 32.5325 6.66667 32.1086 6.66667 31.6666V19.9999H33.3333V31.6666ZM33.3333 16.6666H6.66667V11.6666C6.66667 11.2246 6.84226 10.8006 7.15482 10.4881C7.46738 10.1755 7.89131 9.99992 8.33333 9.99992H11.6667V11.6666C11.6667 12.1086 11.8423 12.5325 12.1548 12.8451C12.4674 13.1577 12.8913 13.3333 13.3333 13.3333C13.7754 13.3333 14.1993 13.1577 14.5118 12.8451C14.8244 12.5325 15 12.1086 15 11.6666V9.99992H25V11.6666C25 12.1086 25.1756 12.5325 25.4882 12.8451C25.8007 13.1577 26.2246 13.3333 26.6667 13.3333C27.1087 13.3333 27.5326 13.1577 27.8452 12.8451C28.1577 12.5325 28.3333 12.1086 28.3333 11.6666V9.99992H31.6667C32.1087 9.99992 32.5326 10.1755 32.8452 10.4881C33.1577 10.8006 33.3333 11.2246 33.3333 11.6666V16.6666Z"
                    fill="black"
                    fill-opacity="0.32"
                  />
                </svg>
                <span className="fs-5 opacity-50">November 12, 2020</span>
              </p>
              <h2 className="fw-bold fs-5">SOME NAME</h2>
              <p className="pst-text fs-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                esse sit quae sed. Temporibus, sit sint porro repudiandae eius
                dolorem soluta, velit ducimus a quisquam minima placeat aliquid
                doloribus obcaecati! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Commodi nesciunt voluptatem sed quae vel
                adipisci, et nobis blanditiis esse, omnis fuga.
              </p>
              <button className="border-0 bg-transparent fw-bold">
                <a
                  href="/post"
                  className="link-underline-light link-underline link-underline-opacity-0 link-opacity-hover-50"
                >
                  <span className="text-black ">Reply</span>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2vw"
                  height="2vw"
                  viewBox="0 0 80 50"
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

          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5">
              <img
                src="/images/comment3.jpg"
                width="170"
                height="170"
                className="rounded-circle img-fluid"
              />
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-7">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.7vw"
                  height="1.7vw"
                  viewBox="0 5 45 40"
                  fill="none"
                >
                  <path
                    d="M31.6667 6.66659H28.3333V4.99992C28.3333 4.55789 28.1577 4.13397 27.8452 3.82141C27.5326 3.50885 27.1087 3.33325 26.6667 3.33325C26.2246 3.33325 25.8007 3.50885 25.4882 3.82141C25.1756 4.13397 25 4.55789 25 4.99992V6.66659H15V4.99992C15 4.55789 14.8244 4.13397 14.5118 3.82141C14.1993 3.50885 13.7754 3.33325 13.3333 3.33325C12.8913 3.33325 12.4674 3.50885 12.1548 3.82141C11.8423 4.13397 11.6667 4.55789 11.6667 4.99992V6.66659H8.33333C7.00725 6.66659 5.73548 7.19337 4.7978 8.13105C3.86012 9.06873 3.33333 10.3405 3.33333 11.6666V31.6666C3.33333 32.9927 3.86012 34.2644 4.7978 35.2021C5.73548 36.1398 7.00725 36.6666 8.33333 36.6666H31.6667C32.9927 36.6666 34.2645 36.1398 35.2022 35.2021C36.1399 34.2644 36.6667 32.9927 36.6667 31.6666V11.6666C36.6667 10.3405 36.1399 9.06873 35.2022 8.13105C34.2645 7.19337 32.9927 6.66659 31.6667 6.66659ZM33.3333 31.6666C33.3333 32.1086 33.1577 32.5325 32.8452 32.8451C32.5326 33.1577 32.1087 33.3333 31.6667 33.3333H8.33333C7.89131 33.3333 7.46738 33.1577 7.15482 32.8451C6.84226 32.5325 6.66667 32.1086 6.66667 31.6666V19.9999H33.3333V31.6666ZM33.3333 16.6666H6.66667V11.6666C6.66667 11.2246 6.84226 10.8006 7.15482 10.4881C7.46738 10.1755 7.89131 9.99992 8.33333 9.99992H11.6667V11.6666C11.6667 12.1086 11.8423 12.5325 12.1548 12.8451C12.4674 13.1577 12.8913 13.3333 13.3333 13.3333C13.7754 13.3333 14.1993 13.1577 14.5118 12.8451C14.8244 12.5325 15 12.1086 15 11.6666V9.99992H25V11.6666C25 12.1086 25.1756 12.5325 25.4882 12.8451C25.8007 13.1577 26.2246 13.3333 26.6667 13.3333C27.1087 13.3333 27.5326 13.1577 27.8452 12.8451C28.1577 12.5325 28.3333 12.1086 28.3333 11.6666V9.99992H31.6667C32.1087 9.99992 32.5326 10.1755 32.8452 10.4881C33.1577 10.8006 33.3333 11.2246 33.3333 11.6666V16.6666Z"
                    fill="black"
                    fill-opacity="0.32"
                  />
                </svg>
                <span className="fs-5 opacity-50">November 12, 2020</span>
              </p>
              <h2 className="fw-bold fs-5">SOME NAME</h2>
              <p className="pst-text fs-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                esse sit quae sed. Temporibus, sit sint porro repudiandae eius
                dolorem soluta, velit ducimus a quisquam minima placeat aliquid
                doloribus obcaecati! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Commodi nesciunt voluptatem sed quae vel
                adipisci, et nobis blanditiis esse, omnis fuga.
              </p>
              <button className="border-0 bg-transparent fw-bold">
                <a
                  href="/post"
                  className="link-underline-light link-underline link-underline-opacity-0 link-opacity-hover-50"
                >
                  <span className="text-black ">Reply</span>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2vw"
                  height="2vw"
                  viewBox="0 0 80 50"
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

          <hr />
          <br />
        </div>

        <div className="container">
          <h1 className="fw-bold fs-1 mt-5 mb-4">LEAVE A COMMENT</h1>
          <textarea
            placeholder="Comment..."
            className="form-control mb-4"
            rows="10"
          />
          <div className="d-flex justify-content-between">
            <input
              type="text"
              placeholder="Your Name..."
              className="me-3 form-control"
            />
            <input
              type="email"
              placeholder="Your Email..."
              className="form-control"
            />
          </div>
          <input type="submit" className="btn btn-success mt-4 mb-5" />
          <br />
        </div>
      </div>
    </>
  );
}
