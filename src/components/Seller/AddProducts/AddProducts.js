import React, { useState } from "react";
import SellerSidebar from "../SellerLayout/SellerSidebar";
import AddProductForm from "./AddProductForm";
import UploadFile from "./UploadFile";
import { db } from "../../../FirebaseConfig";

const initialState = {
  productName: "",
  sellerOption: "",
  category: "",
  brand: "",
  productState: "",
  price: "",
  startDate: "",
  endDate: "",
  avaiable: "",
  quantity: "",
  notes: "",
  images: [],
};

const AddProducts = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialState);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const min = 1;
    const max = 100000000000;
    const rand = min + Math.random() * (max - min);
    await db.collection("Products").doc(rand.toString()).set({
      id: rand.toString(),
      productName: values.productName,
      sellerOption: values.sellerOption,
      category: values.category,
      brand: values.brand,
      productState: values.productState,
      price: values.price,
      startDate: values.startDate,
      endDate: values.endDate,
      // available: values.available,
      quantity: values.quantity,
      notes: values.notes,
      images: values.images,
    })
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.productName}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Product added")
        window.location.reload();
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div class="wrapper d-flex align-items-stretch">
        <SellerSidebar />
        <div id="content" class="p-4 p-md-5 pt-5">
          <h2 class="mb-4">Sell/Rent/Donate Products Form here</h2>
          <UploadFile
                values={values}
                setValues={setValues}
                setLoading={setLoading}
              />
          <AddProductForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setValues={setValues}
            values={values}
          />
        </div>
      </div>
    </>
  );
};

export default AddProducts;
