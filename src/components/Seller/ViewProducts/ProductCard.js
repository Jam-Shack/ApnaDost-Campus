/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { db } from "../../../FirebaseConfig";
import "./ProductCard.css";
import axios from "axios";
const { Meta } = Card;

const ProductCard = ({ product }) => {
    console.log("products hai ===>",product);
  const {
    id,
    productName,
    notes,
    sellerOption,
    images,
    available
  } = product;

  const handleRemove = async () => {
    if (window.confirm("Are you sure want to delete this item?")) {
        try {
            await db.collection('Products')
                .doc(id)
                .delete().then(() => {
                    console.log("Image is here", images)
                    images.map( async (image1) => {
                        console.log("Image is here", image1.public_id)
                        var image_id = image1.public_id;
                        await axios.delete(`https://api.cloudinary.com/v1_1/ddgpfrwad/image/destroy/${image_id}`,
                        {headers: {
                            'Content-Type': 'application/json',
                          },})
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
            window.location.reload()
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }
  };

  return (
    <>
      <Card
        cover={
          <img
            src={images[0].url}
            style={{
              maxWidth: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "5px",
              objectFit: "contain",
            }}
            className="p-1"
          />
        }
        actions={[
          <>
            <Button
              onClick={() => {
                handleRemove(productName);
                console.log(productName);
              }}
              type="danger"
              className="mb-3 pt-3 custom"
              block
              shape="round"
              icon={<DeleteOutlined />}
              size="small"
            ></Button>
            <Link to={`/seller/editProduct/${id}`}>
              <EditOutlined
                type="primary"
                className="mb-3 custom1"
                block
                shape="round"
                size="small"
              />
            </Link>
          </>,
        ]}
      >
        <Meta
          title={productName}
          description={notes}
          // description={sellerOption + " - " + available}
        />
      </Card>
    </>
  );
};

export default ProductCard;
