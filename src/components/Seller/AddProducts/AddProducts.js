import React, { useRef, useState } from "react";
import SellerSidebar from "../SellerLayout/SellerSidebar";
import AddProductForm from "./AddProductForm";
import UploadFile from "./UploadFile";
import { db } from "../../../FirebaseConfig";
import { useSelector } from "react-redux";
import { Toast } from 'primereact/toast';


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

const AddProducts = () => {
  
  const toast = useRef(null);
  const { loggedInUser } = useSelector((state) => ({ ...state }));
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialState);

//Add Product data to firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(values.images.length === 0){
      toast.current.show({severity:'error', summary: 'Error', detail:'Select Product Image', life: 3000});
    }else{
      const min = 1;
      const max = 100000000000;
      const rand = min + Math.random() * (max - min);
      await db.collection("Products").doc(rand.toString()).set({
        userEmail: loggedInUser.email,
        id: rand.toString(),
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
          // console.log(res);
          window.alert(`"${res.data.productName}" is created`);
          window.location.reload();
        })
        .catch(() => {
          // console.log(err);
          alert("Product Added Successfully")
          window.location.reload();
        });
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div class="wrapper d-flex align-items-stretch">
        <SellerSidebar />
        <div id="content" class="p-4 p-md-5 pt-5">
        <Toast ref={toast} />
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
