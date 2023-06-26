import React, { useEffect, useState } from "react";
import SellerSidebar from "../SellerLayout/SellerSidebar";
import { db } from "../../../FirebaseConfig";
import AllProductCard from "./AllProductCard";
import { useSelector } from "react-redux";
import "./AllProductCard.css";

const ViewAllProducts = () => {
  const { loggedInUser } = useSelector((state) => ({ ...state }));

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1)

  useEffect(() => {
    
    loadProductsData();
    // setProductData(null);
    return () =>{
      setProductData([]);
    }
  },[]);

  const loadProductsData = async () => {
    setLoading(true);
    await db
      .collection("Products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setProductData((arr) => [...arr, data]);
        });
        setLoading(false);
      });
    };
    
    return (
      <>
        <div class="wrapper d-flex align-items-stretch">
        {/* <SellerSidebar /> */}
        <div className="wrapper d-flex align-items-stretch">
            {/* <SellerSidebar /> */}
            <div id="content" className="p-4 p-md-5 pt-5">
                <h2>All Products </h2>
                <div className = "product-items">
                    {productData
                    .map((p) => (
                      <div className=""  key={p.productName}>
                        <AllProductCard product={p} />
                      </div>
                    ))}
                  </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAllProducts;
