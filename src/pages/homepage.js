import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import "./homepage.css";
const Homepage = () => {
  const toast = useRef(null);
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const [visible, setVisible] = useState();
  const { loggedInUser } = useSelector((state) => ({ ...state }));

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
        toast.current.show({
          severity: "success",
          summary: "Success Message",
          detail: "Order submitted",
        });
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
      <Toast ref={toast} />
      <div className="container">
          <>
            <>
              <section className="home">
                <div className="home-text">
                  <h1>
                    <span>Get your products </span>
                    <br />
                    at reasonable prices.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur <br />
                    adipisicing elit. Necessitatibus vitae, earum rem facere
                    tempora dolorum!
                  </p>
                  <button>Shop now</button>
                </div>
              </section>
              {/* categories */}
              <h2>Select from Product Categories</h2>
              <div className="categories">
                <div className="category_content one">
                  <h3 className="category_name ">
                    Paper
                    <br />
                    Products
                  </h3>
                </div>
                <div className="category_content two">
                  <h3 className="category_name">
                    Desk
                    <br /> Accessories
                  </h3>
                </div>
                <div className="category_content three">
                  <h3 className="category_name">
                    Notebooks
                    <br />
                    and diaries
                  </h3>
                </div>
                <div className="category_content four">
                  <h3 className="category_name">
                    Art
                    <br />
                    Supplies
                  </h3>
                </div>
                <div className="category_content five">
                  <h3 className="category_name">
                    Files
                    <br /> and Folders
                  </h3>
                </div>
                <div className="category_content six">
                  <h3 className="category_name">
                    Writing
                    <br />
                    Instruments
                  </h3>
                </div>
                <div className="category_content seven">
                  <h3 className="category_name">Electronics</h3>
                </div>
                <div className="category_content eight">
                  <h3 className="category_name">
                    Combo
                    <br />
                    Offers
                  </h3>
                </div>
              </div>
            </>
          </>
        {/* {loggedInUser && (
          <>
            <h1>
              Welcome {loggedInUser.email && loggedInUser.email.split("@")[0]} !
            </h1>
            <ConfirmDialog
              visible={visible}
              onHide={() => setVisible(false)}
              message="Are you sure you want to Logout?"
              header="Confirmation"
              icon="pi pi-exclamation-triangle"
              accept={accept}
              reject={reject}
            />
            <Button
              label="Logout"
              icon="pi pi-check"
              onClick={() => setVisible(true)}
            />
          </>
        )} */}
      </div>
    </>
  );
};

export default Homepage;
