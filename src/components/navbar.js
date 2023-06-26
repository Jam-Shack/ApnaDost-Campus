/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import SellerForm from "./Seller/SellerForm";
import './nav.css';
import lomgo from '../assests/lomgo.png';
import { ConfirmDialog } from "primereact/confirmdialog";

const Navbar = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const [visible, setVisible] = useState();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  //confirm box for signout
  const accept = () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: "LOGOUT2",
          payload: null,
        });
        // alert("Successfully Logout");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reject = () => {
    setVisible(false);
  };

  const { loggedInUser } = useSelector((state) => ({ ...state }));
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div className="container p-2">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            {/* <!-- Navbar brand --> */}
            <a className="navbar-brand mt-lg-0" href="#">
              <img
                className="lomgo"
                src={lomgo}
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chat">
                  Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product_details">
                  Products
                </Link>
              </li>
              {!loggedInUser && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
              {loggedInUser && loggedInUser.role.includes("seller") ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/seller/dashboard">
                      Sell your product
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {loggedInUser && (
                    <>
                      <SellerForm />
                    </>
                  )}
                </>
              )}
              {
                loggedInUser && (
                  <>
                  <ConfirmDialog
                    visible={visible}
                    onHide={() => setVisible(false)}
                    message="Are you sure you want to Logout?"
                    header="Confirmation"
                    icon="pi pi-exclamation-triangle"
                    accept={accept}
                    reject={reject}
                  />
                  <li className="nav-item">
                    <Link className="nav-link" onClick={() => setVisible(true)}>
                      Logout
                    </Link>
                  </li>
                  </>
                )
              }
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
            {/* <!-- Avatar --> */}
            {loggedInUser && (
              <>
                <p style={{ margin: "2px", marginRight: "10px" }}>
                  {loggedInUser.name && loggedInUser.email.split("@")[0]}
                </p>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    role="button"
                    // data-mdb-toggle="dropdown"
                    // aria-expanded="false"
                    onClick={handleProfileClick}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      height="25"
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                      onClick={handleProfileClick}
                    />
                  </a>
                  {showDropdown && (
                  <ul
                    className="dropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        My profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
};

export default Navbar;
