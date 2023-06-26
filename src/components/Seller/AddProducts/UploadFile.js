/* eslint-disable no-loop-func */
import React from "react";
import { Avatar, Badge } from "antd";
import axios from "axios";
import './addProd.css'


const UploadFile = ({ values, setValues, setLoading }) => {
  var image_id;

  //to upload images to cloudinary
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

  //to remove uploaded images from cloudinary
  const remove = async (public_id) => {
    image_id = public_id;
    try{
        await axios.delete(`https://api.cloudinary.com/v1_1/ddgpfrwad/image/destroy/${image_id}`,
        {headers: {
            'Content-Type': 'application/json',
          },}
        );
        console.log("Deleted");
    }catch(err){
        console.log(err);
    }
};

//Iterate through all the images and pass to upload function
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

  //To remove file from cloudinary
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
        {values.images && values.images.length > 0 &&
          values.images.map((image) => (
            <Badge
              count="X"
              key={image.public_id}
              onClick={() => handleImageRemove(image.public_id)}
              style={{ cursor: "pointer"}}
            >
              <Avatar
                size={80}
                src={image.url}
                shape="square"
                className="ml-3 w:30"
              />
            </Badge>
          ))}
      </div>
      <br />
      <div className="row" >
        <label
          style={{
            cursor:'pointer',
            textAlign:'center',
            background: '#FCA744',
            padding: "8px",
            borderRadius: "8px",
            transition: ".4s ease all",
          }}
          className="label btn-primary btn-raised"
        >
          Upload Product Image
          <input
            type="file"
            hidden
            multiple={true}
            accept="images/*"
            onChange={fileUploadAndResize}
          />
        </label>
      </div>
    </>
  );
};

export default UploadFile;
