import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputMask } from "primereact/inputmask";
import { db } from "../../FirebaseConfig";
import { useDispatch, useSelector } from "react-redux";

const SellerForm = () => {
  const [visible, setVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedInUser } = useSelector((state) => ({ ...state }));

  const handleSubmit = async () => {
    const phoneNumberPattern = /^\d{10}$/; // 10-digit numeric phone number pattern
    const isValidPhoneNumber = phoneNumberPattern.test(phone);

    if (isValidPhoneNumber) {
      const newRole = [...loggedInUser.role, "seller"];

      await db
        .collection("users")
        .doc(loggedInUser.email)
        .update({
          id: loggedInUser.id,
          name: loggedInUser.email.split("@")[0],
          email: loggedInUser.email,
          role: newRole,
          phone: phone,
        })
        .then((res) => {
          setPhone("");
          alert("Successfully a seller");
          setVisible(false);
          navigate("/seller/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });

      await db
        .collection("users")
        .doc(loggedInUser.email)
        .get()
        .then(async (doc) => {
          if (doc.exists) {
            var separatedString1 = doc.data();
          }
          dispatch({
            type: "LOGGED_IN_USER2",
            payload: {
              name: separatedString1.email.split("@")[0],
              email: separatedString1.email,
              token: loggedInUser.token,
              role: await separatedString1.role,
              id: separatedString1.id,
              phone: separatedString1.phone,
            },
          });
        });
    } else {
      // Invalid phone number, set validation flag
      setIsValid(false);
    }
  };

  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" onClick={() => setVisible(true)}>
          Become a Seller
        </Link>
      </li>
      <form onSubmit={handleSubmit}>
        <Dialog
          header="Enter Your Seller Details"
          visible={visible}
          style={{ width: "40vw" }}
          onHide={() => setVisible(false)}
        >
          <div class="row">
            <div class="col-12 flex justify-content-center">
              <div class="form-outline">
                <label htmlFor="phone" className="font-bold block mb-2">
                  Phone
                </label>
                <div className="p-inputgroup" style={{ paddingBottom: "1rem" }}>
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-phone"></i>
                  </span>
                  <InputMask
                    id="phone"
                    name="phoneNo"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    mask="9999999999"
                    placeholder="99-999999"
                    required
                  />
                </div>
                {!isValid && (
                  <p style={{ color: "red" }}>Invalid phone number</p>
                )}
                <button type="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </form>
    </>
  );
};

export default SellerForm;
