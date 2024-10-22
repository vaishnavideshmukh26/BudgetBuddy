import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import './Header.css';
const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg  bd-navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div class="px-3 ms-xl-4">
          <img className="h1 fw-bold mb-0 my-3" src="/images/pngegg.png" width={'50px'} height={'50px'} alt="logo" />
          {/* <span class="h1 fw-bold mb-0">Logo</span> */}
        </div>
          <Link className="navbar-brand text-white fw-bold " to="/">
              BB
            </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {" "}
                <p className="nav-link text-white my-3">{loginUser && loginUser.name}</p>{" "}
              </li>
              <li className="nav-item">
                <button className="btn old-bv text-white pl-3 px-3 pr-3 my-3 mx-3" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;