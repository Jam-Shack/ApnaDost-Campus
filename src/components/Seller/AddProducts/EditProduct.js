import React, { useState } from "react";
import AddProductForm from "./AddProductForm";
import SellerSidebar from "../SellerLayout/SellerSidebar";
import EditProductImage from "./EditProductImage";
import { LoadingOutlined } from '@ant-design/icons';

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

const EditProduct = () => {
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {};
  return (
    <div class="wrapper d-flex align-items-stretch">
      <SellerSidebar />
      <div id="content" class="p-4 p-md-5 pt-5">
        <h2 class="mb-4">Sell/Rent/Donate Products Form here</h2>
        <br />
        {loading ? (
          <LoadingOutlined className="text-danger h1" />
        ) : (
          <h4 className="heading">Update Product</h4>
        )}
        <hr />
        <EditProductImage
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
  );
};

export default EditProduct;
