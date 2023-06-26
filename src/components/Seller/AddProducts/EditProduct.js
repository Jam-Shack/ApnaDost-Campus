import React, { useEffect, useRef, useState } from "react";
import AddProductForm from "./AddProductForm";
import SellerSidebar from "../SellerLayout/SellerSidebar";
import EditProductImage from "./EditProductImage";
import { LoadingOutlined } from "@ant-design/icons";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { db } from "../../../FirebaseConfig";
import { Toast } from "primereact/toast";

const initialState = {
  productName: "",
  sellerOption: "",
  category: "",
  brand: "",
  productState: "",
  price: "",
  startDate: "",
  endDate: "",
  available: "",
  quantity: "",
  notes: "",
  images: [],
};

const EditProduct = () => {
  const { id } = useParams();
  const toast = useRef(null);
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState(initialState);

  let navigate = useNavigate();

  useEffect(() => {
    retrive();
  }, []);

  //Retrieve Product Data from Firebase
  const retrive = async () => {
    try {
      await db
        .collection("Products")
        .doc(id)
        .get()
        .then((doc) => {
          if (doc && doc.exists) {
            setValues(doc.data());
            console.log("This is doc", doc.data());
            console.log(values);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //to update the product details
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.images.length === 0) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Select Product Image",
        life: 3000,
      });
    } else {
      const min = 1;
      const max = 100000000000;
      const rand = min + Math.random() * (max - min);
      await db
        .collection("Products")
        .doc(rand.toString())
        .set({
          productName: values.productName,
          sellerOption: values.sellerOption,
          category: values.category,
          brand: values.brand,
          productState: values.productState,
          price: values.price,
          startDate: values.startDate,
          endDate: values.endDate,
          available: values.available,
          quantity: values.quantity,
          notes: values.notes,
          images: values.images,
        })
        .then((res) => {
          console.log(res);
          window.alert(`"${res.data.productName}" is Updated`);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Product Updated Successfully");
          navigate("/seller/viewProducts");
          window.location.reload();
        });
    }
  };
  return (
    <div class="wrapper d-flex align-items-stretch">
      <SellerSidebar />
      <div id="content" class="p-4 p-md-5 pt-5">
        <Toast ref={toast} />
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
