/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./AllProductCard.css";
import { Link, Navigate } from 'react-router-dom';



const { Meta } = Card;


const AllProductCard = ({ product }) => {

    console.log("*************** ===>",product);
    const {
      id,
      category,
      price,
      productName,
      notes,
      sellerOption,
      images,
        available,
      userEmail
    } = product;

  return (
    <>
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src={images[0].url} alt = "product image" />
                            </div>
                            <div className = "product-btns">
                                <Link to="/chat" className = "btn-cart"> Chat with Seller<span><i className = "fas fa-shopping-cart"></i></span>
                                </Link>

                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                      <h2 className="sm-title">{productName}</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">All the products are available at cheaper Rates</a>
                            <p className = "product-price">$ 150.00</p>
                            <p className = "product-price">$ {price}</p>
                        </div>

                        <div className = "off-info">
                            <h2 className = "sm-title">35% off</h2>
                        </div>
                    </div>
    </>
  );
};

export default AllProductCard;


