import React, { useState } from "react";
import { FileUpload } from "primereact/fileupload";
import { Dropdown } from "primereact/dropdown";
import "./addProd.css";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";

const AddProductForm = ({ handleSubmit, handleChange, values, setValues }) => {
  const {
    productName,
    sellerOption,
    category,
    brand,
    productState,
    price,
    startDate,
    endDate,
    quantity,
    notes,
  } = values;
  //dropdown Items
  const opt = ["Sell", "Rent", "Donate"];
  const categories = ["Stationery", "Calculator", "Laptop", "Exam Material"];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="container surface-card p-6 shadow-2 border-round p-fluid">
          <div class="grid formgrid p-fluid">
            <div class="field mb-4 col-12 md:col-6">
              <input
                placeholder="Enter Product Name"
                name="productName"
                value={productName}
                onChange={handleChange}
                id="productName"
                type="text"
                class="p-inputtext p-component"
              />
            </div>
            <div class="field mb-4 col-12 md:col-6">
              <Dropdown
                name="sellerOption"
                value={sellerOption}
                onChange={handleChange}
                options={opt}
                placeholder="Want to?"
                className="w-full md:w-32rem"
              />
            </div>

            <div class="field mb-4 col-12 md:col-6">
              <Dropdown
                name="category"
                value={category}
                onChange={handleChange}
                options={categories}
                placeholder="Product Category"
                className="w-full md:w-32rem"
              />
            </div>
            <div class="field mb-4 col-12 md:col-6">
              <input
                name="brand"
                value={brand}
                placeholder="Enter product brand"
                id="customer_name"
                onChange={handleChange}
                type="text"
                class="p-inputtext p-component"
              />
            </div>
            <div class="field mb-4 col-12 md:col-6">
              <input
                name="productState"
                value={productState}
                onChange={handleChange}
                placeholder="Enter state of product"
                id="customer_email"
                type="text"
                class="p-inputtext p-component"
              />
            </div>

            {sellerOption !== "Donate" && (
              <>
                <div class="field mb-4 col-12 md:col-6">
                  <div className="p-inputgroup flex-1">
                    <span className="p-inputgroup-addon">$</span>
                    <input
                      type="number"
                      name="price"
                      value={price}
                      onChange={handleChange}
                      placeholder="Product Price"
                      class="p-inputtext p-component"
                    />
                  </div>
                </div>
              </>
            )}
            {sellerOption && sellerOption === "Rent" && (
              <>
                <div class="field mb-4 col-12 md:col-6">
                  <span
                    id="due_date"
                    class="p-calendar p-component p-inputwrapper p-calendar-w-btn p-calendar-w-btn-right"
                  >
                    <Calendar
                      placeholder="Select start date for rent"
                      name="startDate"
                      value={startDate}
                      onChange={handleChange}
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
                      name="endDate"
                      placeholder="Select end date for rent"
                      value={endDate}
                      oonChange={handleChange}
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
                onChange={handleChange}
                name="quantity"
                value={quantity}
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
                name="notes"
                value={notes}
                onChange={handleChange}
                id="notes"
                rows="5"
                class="p-inputtextarea p-inputtext p-component p-inputtextarea-resizable"
                style={{ overflow: "hidden", height: "129px" }}
              ></textarea>
            </div>

          </div>
          <div className="btnBox">
            <button
              aria-label="Create Invoice"
              class="p-button p-component w-auto"
            >
              <span class="p-button-icon p-c p-button-icon-left pi pi-check"></span>
              <span class="p-button-label p-c">List my Product</span>
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
    </>
  );
};

export default AddProductForm;
