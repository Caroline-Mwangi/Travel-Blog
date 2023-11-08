export default function NavBar() {
  return (
    <>
      <div className="container-fluid nav-header ">
        <nav class="navbar navbar-expand-lg bg-body-white">
          <div class="container-fluid">
            <a class="navbar-brand nav-title" href="#">
              Travel<span className="nav-title2">Diary</span> 
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ms-auto me-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2.3vw"
                      height="2.3vw"
                      viewBox="0 0 50 80"
                      fill="none"
                    >
                      <path
                        d="M21.7175 48.2825L14.0671 44.1292L15.785 42.4113L22.5691 43.4321L34.6733 31.3279L13.2154 19.7196L15.3912 17.4854L41.7871 24.1821L50.3708 15.575C50.9347 15.0111 51.6036 14.7292 52.3775 14.7292C53.1494 14.7292 53.8173 15.0111 54.3812 15.575C54.9451 16.1389 55.2271 16.8175 55.2271 17.6109C55.2271 18.4003 54.9451 19.0779 54.3812 19.6438L45.8646 28.2684L52.5087 54.6088L50.3329 56.84L38.6662 35.3821L26.6729 47.3725L27.6354 54.215L25.865 55.9883L21.7175 48.2825Z"
                        fill="rgba(137, 154, 110, 0.7)"
                      />
                    </svg>
                    <span className="dest">Destinations</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Africa
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Europe
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Asia
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        North America
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        South America
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Antarctica
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Australia
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
