import React, { useState } from "react";
import SellerSidebar from "../SellerLayout/SellerSidebar";
import { FileUpload } from "primereact/fileupload";
import { Dropdown } from "primereact/dropdown";
import "./addProd.css";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";

const AddProducts = () => {

  const [productName, setProductName] = useState(null);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  //dropdown Items
  const opt = ["Sell", "Rent", "Donate"];
  const categories = ["Stationery", "Calculator", "Laptop", "Exam Material"];

  return (
    <>
      <div class="wrapper d-flex align-items-stretch">
        <SellerSidebar />
        <div id="content" class="p-4 p-md-5 pt-5">
          <h2 class="mb-4">Sell/Rent/Donate Products Form here</h2>
           <form>
          <div class="container surface-card p-6 shadow-2 border-round p-fluid">
            <div class="grid formgrid p-fluid">
              <div class="field mb-4 col-12 md:col-6">
                <input
                  placeholder="Enter Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  id="productName"
                  type="text"
                  class="p-inputtext p-component"
                />
              </div>
              <div class="field mb-4 col-12 md:col-6">
                <Dropdown
                  value={selectedOpt}
                  onChange={(e) => setSelectedOpt(e.target.value)}
                  options={opt}
                  placeholder="Want to?"
                  className="w-full md:w-32rem"
                />
              </div>

              <div class="field mb-4 col-12 md:col-6">
                <Dropdown
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  options={categories}
                  placeholder="Product Category"
                  className="w-full md:w-32rem"
                />
              </div>
              <div class="field mb-4 col-12 md:col-6">
                <input
                  placeholder="Enter product brand"
                  id="customer_name"
                  type="text"
                  class="p-inputtext p-component"
                />
              </div>
              <div class="field mb-4 col-12 md:col-6">
                <input
                  placeholder="Enter state of product"
                  id="customer_email"
                  type="text"
                  class="p-inputtext p-component"
                />
              </div>

              {selectedOpt !== "Donate" && (
                <>
                  <div class="field mb-4 col-12 md:col-6">
                    <div className="p-inputgroup flex-1">
                      <span className="p-inputgroup-addon">$</span>
                      <InputNumber placeholder="Product Price" />
                    </div>
                  </div>
                </>
              )}
              {selectedOpt && selectedOpt === "Rent" && (
                <>
                  <div class="field mb-4 col-12 md:col-6">
                    <span
                      id="due_date"
                      class="p-calendar p-component p-inputwrapper p-calendar-w-btn p-calendar-w-btn-right"
                    >
                      <Calendar
                        placeholder="Select start date for rent"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        showIcon
                        className="w-full md:w-32rem"
                      />
                    </span>
                  </div>
                  <div class="field mb-4 col-12 md:col-6">
                    <span
                      id="due_date"
                      class="p-calendar p-component p-inputwrapper p-calendar-w-btn p-calendar-w-btn-right"
                    >
                      <Calendar
                        placeholder="Select end date for rent"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        showIcon
                        className="w-full md:w-32rem"
                      />
                    </span>
                  </div>
                </>
              )}
              <div class="field mb-4 col-6 md:col-3">
                <input
                  placeholder="Quantity"
                  id="item2"
                  type="text"
                  class="p-inputtext p-component"
                />
              </div>
              <div class="field mb-4 col-12">
                <label for="notes" class="font-medium text-900">
                  Notes
                </label>
                <textarea
                  id="notes"
                  rows="5"
                  class="p-inputtextarea p-inputtext p-component p-inputtextarea-resizable"
                  style={{ overflow: "hidden", height: "129px" }}
                ></textarea>
              </div>

              <div className="field mb-4 col-12">
                <FileUpload
                  name="product_image"
                  mode="basic"
                  chooseLabel="Upload Product image"
                  uploadLabel="Upload"
                  className="p-inputtext p-component"
                />
              </div>
            </div>
            <div className="btnBox">
              <button
                aria-label="Create Invoice"
                class="p-button p-component w-auto"
              >
                <span class="p-button-icon p-c p-button-icon-left pi pi-check"></span>
                <span class="p-button-label p-c">SELL</span>
                <span
                  role="presentation"
                  class="p-ink"
                  style={{ height: "172.719px", width: "172.719px" }}
                ></span>
              </button>

              <button
                aria-label="Create Invoice"
                class="p-button p-component w-auto"
              >
                <span class="p-button-icon p-c p-button-icon-left pi pi-file-edit"></span>
                <span class="p-button-label p-c">RESET</span>
                <span
                  role="presentation"
                  class="p-ink"
                  style={{ height: "172.719px", width: "172.719px" }}
                ></span>
              </button>
            </div>
          </div>
          </form> 
        </div>
      </div>
    </>
  );
};

export default AddProducts;
