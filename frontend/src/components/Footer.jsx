export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <>
      <footer class="foot p-4">
        <div class="container-fluid d-flex justify-content-between ">
          <div class="text-black">
            &copy; {year} Portfolio. All rights reserved.
          </div>

          <div class="d-flex ">
            <a href="#" class="text-black ">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-black  ms-3 me-3">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-black ">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
