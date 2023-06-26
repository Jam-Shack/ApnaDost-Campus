/* eslint-disable no-loop-func */
import React, { useState } from "react";
import { Avatar, Badge } from "antd";
import axios from "axios";

const EditProductImage = ({ values, setValues, setLoading }) => {
  const [errorMessage, setErrorMessage] = useState("");
  var image_id;

  const upload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "owxlp0qy");

    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/ddgpfrwad/image/upload",
      formData
    );
    return { public_id: data?.public_id, url: data?.secure_url };
  };

  //to remove uploaded images to cloudinary
  const remove = async (public_id) => {
    image_id = public_id;
    try {
      await axios.delete(
        `https://api.cloudinary.com/v1_1/ddgpfrwad/image/destroy/${image_id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Deleted");
    } catch (err) {
      console.log(err);
    }
  };

  //to upload multiple files
  const fileUploadAndResize = async (e) => {
    try {
      let files = e.target.files;
      let allUploadedFiles = values.images;
      if (files) {
        console.log(files);
        setLoading(true);
        for (let i = 0; i < files.length; i++) {
          const imgData = await upload(files[i]);
          allUploadedFiles.push(imgData);
          setLoading(false);
        }
        setValues({ ...values, images: allUploadedFiles });
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleImageRemove = (public_id) => {
    setLoading(true);
    remove(public_id)
      .then((res) => {
        setLoading(false);
        const { images } = values;
        let filteredImages = images.filter((item) => {
          return item.public_id !== public_id;
        });
        setValues({ ...values, images: filteredImages });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="row">
        {values.images &&
          values.images.length > 0 &&
          values.images.map((image) => (
            <Badge
              count="X"
              key={image.public_id}
              onClick={() => handleImageRemove(image.public_id)}
              style={{ cursor: "pointer" }}
            >
              <Avatar
                src={image.url}
                size={100}
                shape="square"
                className="ml-3"
              />
            </Badge>
          ))}
      </div>

      <br />
      <div className="row">
        <label
          style={{
            padding: "8px",
            borderRadius: "8px",
            transition: ".4s ease all",
          }}
          className=" btn-primary btn-raised"
        >
          Choose Files
          <input
            type="file"
            hidden
            multiple
            accept="images/*"
            onChange={fileUploadAndResize}
            required
          />
        </label>
      </div>
    </>
  );
};

export default EditProductImage;
