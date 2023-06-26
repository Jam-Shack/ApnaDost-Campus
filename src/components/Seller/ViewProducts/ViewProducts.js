import React, { useEffect, useState } from "react";
import SellerSidebar from "../SellerLayout/SellerSidebar";
import { db } from "../../../FirebaseConfig";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ViewProducts = () => {
  const { loggedInUser } = useSelector((state) => ({ ...state }));

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProductsData();
    // setProductData(null);
    return () => {
      setProductData([]);
    };
  }, []);

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
        <SellerSidebar />
        <div id="content" class="p-4 p-md-5 pt-5">
          <h2 class="mb-4">View all Sell/Rent/Donate Products here</h2>
          <div className="row-wrap">
            {productData
              .filter((p) => p.userEmail === loggedInUser.email)
              .map((p) => (
                <div className="col-md-4 pb-3" key={p.productName}>
                  <ProductCard product={p} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProducts;
