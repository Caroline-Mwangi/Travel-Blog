export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <>
      <footer className="foot p-4">
        <div className="container-fluid d-flex justify-content-between ">
          <div className="text-black">
            &copy; {year} Portfolio. All rights reserved.
          </div>

          <div className="d-flex ">
            <a href="#" className="text-black ">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-black  ms-3 me-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-black ">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
