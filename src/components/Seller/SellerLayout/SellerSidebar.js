/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Sidebas.css";
import Logo from "../../../assests/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";
import { ConfirmDialog } from "primereact/confirmdialog";

const SellerSidebar = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const [visible, setVisible] = useState();
  const [sidebarActive, setSidebarActive] = useState(false);
  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const { loggedInUser } = useSelector((state) => ({ ...state }));
  // console.log("Value hai -> ",loggedInUser);

  const accept = () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: "LOGOUT2",
          payload: null,
        });
        alert("Successfully Logout");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const reject = () => {
    setVisible(false);
  };

  return (
    <>
      <nav id="sidebar" className={sidebarActive ? "active" : ""}>
        <div class="custom-menu">
          <button
            type="button"
            id="sidebarCollapse"
            class="btn btn-primary"
            onClick={toggleSidebar}
          ></button>
        </div>
        <div class="img bg-wrap text-center py-4">
          <div class="user-logo">
            <img className="img" src={Logo} alt="Logo" />
            <h3>{loggedInUser.name}</h3>
            <h3 style={{ fontSize: "14px" }}>{loggedInUser.email}</h3>
          </div>
        </div>
        <ul class="list-unstyled components mb-5">
          <li class="active">
            <Link to="/seller/dashboard">
              <span class="fa fa-home mr-3"></span> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/seller/addProduct">
              <span class="fa fa-plus mr-3 notif"></span> Sell Products
            </Link>
          </li>
          <li>
            <Link to="/seller/viewProducts">
              <span class="fa fa-eye mr-3"></span>View My Products
            </Link>
          </li>
          <li>
            <Link to="#">
              <span class="fa fa-trophy mr-3"></span>Top Review
            </Link>
          </li>
          <li>
            <a href="#">
              <span class="fa fa-cog mr-3"></span> Settings
            </a>
          </li>
          <li>
            <a href="#">
              <span class="fa fa-hand mr-3"></span> Support
            </a>
          </li>
          <ConfirmDialog
            visible={visible}
            onHide={() => setVisible(false)}
            message="Are you sure you want to Logout?"
            header="Confirmation"
            icon="pi pi-exclamation-triangle"
            accept={accept}
            reject={reject}
          />
          <li>
            <a onClick={() => setVisible(true)}>
              <span class="fa fa-sign-out mr-3"></span> Sign Out
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SellerSidebar;
