
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Themechanger from "./Themechanger";
import Sidebar from "./Sidebar";
import "./Theme.css";
import Modalitem from "./Modalitem";

const Navbar = ({ count, cart, username }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1g5235OukUDjuDxT52wkSiKT9RxDg1umQmw&s"
            alt="Profile"
            className="navbar-profile-img"
            onClick={toggleSidebar}
          />
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="Home">
                  Home
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <a className="nav-link" href="#">
                  <span className="badge badge-pill bg-danger">
                    {count.length} 
                  </span>
                  <span>
                    <span
                      className="fas fa-shopping-cart"
                      style={{ marginLeft: "10px" }}
                    >
                      <Modalitem cart={cart} />
                    </span>
                  </span>
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <span className="fas fa-user" style={{ marginRight: "10px" }}></span>
                <span style={{ marginRight: "20px" }}>{username}</span>
              </li>
              <Themechanger Size={90} />
            </ul>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} handleLogout={handleLogout} />
    </div>
  );
};

export default Navbar;
