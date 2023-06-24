import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";

const SellerForm = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState();

  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" onClick={() => setVisible(true)}>
          Become a Seller
        </Link>
      </li>
      <Dialog
        header="Enter Your Seller Details"
        visible={visible}
        style={{ width: "40vw" }}
        onHide={() => setVisible(false)}
      >
        <form>
          <div class="row">
            <div class="col-12 flex justify-content-center">
              <div class="form-outline">
                <label htmlFor="phone" className="font-bold block mb-2">
                  Phone
                </label>
              <div className="p-inputgroup" style={{paddingBottom:"1rem"}}>
                <span className="p-inputgroup-addon">
                  <i className="pi pi-phone"></i>
                </span>
                <InputMask
                  id="phone"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  mask="9999999999"
                  placeholder="99-999999"
                />
                </div>
                <Button label="Primary" text raised />
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default SellerForm;
