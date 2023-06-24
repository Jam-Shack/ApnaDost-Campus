/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ProductDetails = () => {
  return (
    <>
      <div className="block-content">
        <div>
          <section className="surface-50 font-medium py-3 text-center text-xs sm:text-base text-900">
            <strong>15%</strong> off on your first order.
          </section>
          <div className="surface-section px-4 md:px-6 lg:px-8">
            <ul className="list-none py-3 px-0 m-0 border-y-1 surface-border flex flex-wrap align-items-center font-medium overflow-x-auto">
              <li className="lg:pr-3">
                <a className="cursor-pointer text-900 white-space-nowrap">Home</a>
              </li>
              <li className="lg:px-2">
                <span className="text-900">/</span>
              </li>
              <li className="lg:px-2">
                <a className="cursor-pointer text-900 white-space-nowrap">Categories</a>
              </li>
              <li className="lg:px-2">
                <span className="text-900">/</span>
              </li>
              <li className="lg:px-2">
                <a className="cursor-pointer text-900 white-space-nowrap">
                  Stationeries
                </a>
              </li>
              <li className="lg:px-2">
                <span className="text-900">/</span>
              </li>
              <li className="lg:px-2">
                <a className="cursor-pointer text-500 white-space-nowrap">Calculator</a>
              </li>
            </ul>
            <div className="grid my-4">
              <div className="col-12 lg:col-6">
                <div className="flex">
                  <div className="flex flex-column w-2 justify-content-between">
                    <img
                      src="https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
                      className="w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150 border-primary"
                      alt="product-overview"
                    />
                    <img
                      src="https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
                      className="w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150"
                      alt="product-overview"
                    />
                    <img
                      src="https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
                      className="w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150"
                      alt="product-overview"
                    />
                    <img
                      src="https://help.rangeme.com/hc/article_attachments/360006928633/what_makes_a_good_product_image.jpg"
                      className="w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150"
                      alt="product-overview"
                    />
                  </div>
                  <div className="pl-3 w-10">
                    <img
                      src="https://us.123rf.com/450wm/ddtek/ddtek1903/ddtek190300111/120609515-top-view-of-work-space-photographer-with-digital-camera-flash-cleaning-kit-white-table-background.jpg?ver=6"
                      className="w-full"
                      alt="product-overview"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6 py-3 lg:pl-6">
                <div className="flex align-items-center text-xl font-medium text-900 mb-4">
                  Product Title Placeholder
                </div>
                <div className="flex align-items-center justify-content-between mb-5">
                  <span className="text-900 font-medium text-3xl block">$120</span>
                  <div className="flex align-items-center">
                    <span className="mr-3">
                      <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                      <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                      <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                      <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                      <i className="pi pi-star text-700 mr-1"></i>
                    </span>
                    <span className="text-sm">
                      <b className="text-900 mr-1">24</b>
                      <span className="text-500"></span>reviews
                    </span>
                  </div>
                </div>
                <div className="font-bold text-900 mb-3">Color</div>
                <div className="flex align-items-center mb-5">
                  <div
                    className="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
                    style={{ boxShadow: "0 0 0 0.2rem var(--bluegray-500)" }}
                  ></div>
                  <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-green-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"></div>
                  <div className="w-2rem h-2rem flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"></div>
                </div>
                <div className="mb-3 flex align-items-center justify-content-between">
                  <span className="font-bold text-900">Size</span>
                  <a
                    tabindex="0"
                    className="cursor-pointer text-600 text-sm flex align-items-center"
                  >
                    Size Guide
                    <i className="ml-1 pi pi-angle-right"></i>
                  </a>
                </div>
                <div className="grid grid-nogutter align-items-center mb-5">
                  <div className="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                    XS
                  </div>
                  <div className="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                    S
                  </div>
                  <div className="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors border-blue-500 border-2 text-blue-500">
                    M
                  </div>
                  <div className="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                    L
                  </div>
                  <div className="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
                    XL
                  </div>
                </div>
                <div className="font-bold text-900 mb-3">Quantity</div>
                <div className="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between">
                  <span className="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal">
                    <input
                      role="spinbutton"
                      className="p-inputtext p-component p-filled p-inputnumber-input w-3rem text-center"
                      type="text"
                      inputmode="numeric"
                      min="0"
                      aria-valuemin="0"
                      aria-valuenow="1"
                      value="1"
                      fdprocessedid="ejg2vl"
                    />
                    <button
                      type="button"
                      className="p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component p-button-text"
                      tabindex="-1"
                    >
                      <span className="p-button-icon pi pi-plus"></span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "48px", width: "48px" }}
                      ></span>
                    </button>
                    <button
                      type="button"
                      className="p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component p-button-text"
                      tabindex="-1"
                    >
                      <span className="p-button-icon pi pi-minus"></span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "48px", width: "48px" }}
                      ></span>
                    </button>
                  </span>
                  <div className="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5">
                    <button
                      aria-label="Add to Cart"
                      className="p-button p-component flex-1 mr-5"
                      fdprocessedid="z0z7ga"
                    >
                      <span className="p-button-label p-c">Add to Cart</span>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "366.8px", width: "366.8px" }}
                      ></span>
                    </button>
                    <i className="pi text-2xl cursor-pointer pi-heart text-600"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-tabview p-component">
              <div className="p-tabview-nav-container">
                <div className="p-tabview-nav-content" id="pr_id_1">
                  <ul className="p-tabview-nav" role="tablist">
                    <li
                      className="p-unselectable-text p-tabview-selected p-highlight"
                      role="presentation"
                    >
                      <a
                        role="tab"
                        className="p-tabview-nav-link"
                        id="pr_id_1_header_0"
                        aria-controls="pr_id_1_content_0"
                        aria-selected="true"
                        tabindex="0"
                      >
                        <span className="p-tabview-title">Details</span>
                        <span
                          role="presentation"
                          className="p-ink"
                          style={{ height: "91.425px", width: "91.425px" }}
                        ></span>
                      </a>
                    </li>
                    <li className="p-unselectable-text" role="presentation">
                      <a
                        role="tab"
                        className="p-tabview-nav-link"
                        id="pr_id_1_header_1"
                        aria-controls="pr_id_1_content_1"
                        aria-selected="false"
                        tabindex="0"
                      >
                        <span className="p-tabview-title">Reviews</span>
                        <span
                          role="presentation"
                          className="p-ink"
                          style={{ height: "100.375px", width: "100.375px" }}
                        ></span>
                      </a>
                    </li>
                    <li className="p-unselectable-text" role="presentation">
                      <a
                        role="tab"
                        className="p-tabview-nav-link"
                        id="pr_id_1_header_2"
                        aria-controls="pr_id_1_content_2"
                        aria-selected="false"
                        tabindex="0"
                      >
                        <span className="p-tabview-title">
                          Shipping and Returns
                        </span>
                        <span
                          role="presentation"
                          className="p-ink"
                          style={{ height: "201.9px", width: "201.9px" }}
                        ></span>
                      </a>
                    </li>
                    <li
                      className="p-tabview-ink-bar"
                      style={{ width: "91px", left: "0px" }}
                    ></li>
                  </ul>
                </div>
              </div>
              <div className="p-tabview-panels">
                <div
                  id="pr_id_1_content_0"
                  aria-labelledby="pr_id_1_header_0"
                  aria-hidden="false"
                  className="p-tabview-panel"
                  role="tabpanel"
                >
                  <div className="grid mt-4">
                    <div className="col-12 lg:col-4">
                      <div className="font-medium text-xl text-900 mb-3">
                        Share your experience
                      </div>
                      <p className="text-600 p-0 mt-0 mb-3 line-height-3">
                        Orci a scelerisque purus semper eget duis at tellus at.
                        Ut diam quam nulla porttitor.
                      </p>
                      <button
                        aria-label="Write a review"
                        className="p-button p-component p-button-rounded"
                        fdprocessedid="stk1l"
                      >
                        <span className="p-button-label p-c">Write a review</span>
                        <span
                          role="presentation"
                          className="p-ink"
                          style={{ height: "150.512px", width: "150.512px" }}
                        ></span>
                      </button>
                    </div>
                    <div className="col-12 lg:col-4 flex align-items-start justify-content-center py-5 lg:py-0">
                      <div>
                        <span className="text-5xl text-900 font-bold mr-2">
                          190
                        </span>
                        <span className="text-5xl text-600">Reviews</span>
                        <div className="mt-3 text-center">
                          <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                          <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                          <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                          <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                          <i className="pi pi-star-fill text-300 text-2xl"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 lg:col-4">
                      <ul className="list-none p-0 m-0">
                        <li className="flex align-items-center mb-2">
                          <span className="text-900 font-medium mr-1 w-1rem">
                            5
                          </span>
                          <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                          <div
                            style={{ height: "7px" }}
                            className="border-round overflow-hidden flex-auto surface-300"
                          >
                            <div className="h-full bg-yellow-500 w-9 border-round"></div>
                          </div>
                          <span className="text-500 font-medium ml-2">75%</span>
                        </li>
                        <li className="flex align-items-center mb-2">
                          <span className="text-900 font-medium mr-1 w-1rem">
                            4
                          </span>
                          <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                          <div
                            style={{ height: "7px" }}
                            className="border-round overflow-hidden flex-auto surface-300"
                          >
                            <div className="h-full bg-yellow-500 w-6 border-round"></div>
                          </div>
                          <span className="text-500 font-medium ml-2">50%</span>
                        </li>
                        <li className="flex align-items-center mb-2">
                          <span className="text-900 font-medium mr-1 w-1rem">
                            3
                          </span>
                          <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                          <div
                            style={{ height: "7px" }}
                            className="border-round overflow-hidden flex-auto surface-300"
                          >
                            <div className="h-full bg-yellow-500 w-2 border-round"></div>
                          </div>
                          <span className="text-500 font-medium ml-2">20%</span>
                        </li>
                        <li className="flex align-items-center mb-2">
                          <span className="text-900 font-medium mr-1 w-1rem">
                            2
                          </span>
                          <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                          <div
                            style={{ height: "7px" }}
                            className="border-round overflow-hidden flex-auto surface-300"
                          >
                            <div className="h-full bg-yellow-500 w-4 border-round"></div>
                          </div>
                          <span className="text-500 font-medium ml-2">40%</span>
                        </li>
                        <li className="flex align-items-center mb-2">
                          <span className="text-900 font-medium mr-1 w-1rem">
                            1
                          </span>
                          <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                          <div
                            style={{ height: "7px" }}
                            className="border-round overflow-hidden flex-auto surface-300"
                          >
                            <div className="h-full bg-yellow-500 w-3 border-round"></div>
                          </div>
                          <span className="text-500 font-medium ml-2">30%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5">
                    <ul className="list-none m-0 p-0">
                      <li className="py-5 border-top-1 surface-border">
                        <div className="flex align-items-center justify-content-between mb-3">
                          <div className="flex align-items-center">
                            <img
                              src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                              className="w-3rem h-3rem flex-shrink-0 mr-3"
                              alt="avatar-m-1"
                            />
                            <div className="flex flex-column">
                              <span className="text-900 font-medium mb-1">
                                Robert Fox
                              </span>
                              <span className="text-500 font-medium text-sm">
                                February 3, 2022
                              </span>
                            </div>
                          </div>
                          <div className="flex align-items-center">
                            <span className="mr-2">
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500"></i>
                            </span>
                            <span className="font-medium">5</span>
                          </div>
                        </div>
                        <p className="text-600 p-0 m-0 line-height-3">
                          Scelerisque varius morbi enim nunc. Arcu bibendum at
                          varius vel pharetra vel turpis nunc eget. Elit ut
                          aliquam purus sit amet luctus. Aliquam etiam erat
                          velit scelerisque in.
                        </p>
                      </li>
                      <li className="py-5 border-top-1 surface-border">
                        <div className="flex align-items-center justify-content-between mb-3">
                          <div className="flex align-items-center">
                            <img
                              src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
                              className="w-3rem h-3rem flex-shrink-0 mr-3"
                              alt="avatar-f-3"
                            />
                            <div className="flex flex-column">
                              <span className="text-900 font-medium mb-1">
                                Savannah Williams
                              </span>
                              <span className="text-500 font-medium text-sm">
                                February 4, 2022
                              </span>
                            </div>
                          </div>
                          <div className="flex align-items-center">
                            <span className="mr-2">
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500"></i>
                            </span>
                            <span className="font-medium">5</span>
                          </div>
                        </div>
                        <p className="text-600 p-0 m-0 line-height-3">
                          Orci porta non pulvinar neque laoreet suspendisse
                          interdum consectetur. Vitae elementum curabitur vitae
                          nunc sed velit dignissim sodales ut.
                        </p>
                      </li>
                      <li className="py-5 border-top-1 surface-border">
                        <div className="flex align-items-center justify-content-between mb-3">
                          <div className="flex align-items-center">
                            <img
                              src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
                              className="w-3rem h-3rem flex-shrink-0 mr-3"
                              alt="avatar-f-2"
                            />
                            <div className="flex flex-column">
                              <span className="text-900 font-medium mb-1">
                                Kathryn Murphy
                              </span>
                              <span className="text-500 font-medium text-sm">
                                February 5, 2022
                              </span>
                            </div>
                          </div>
                          <div className="flex align-items-center">
                            <span className="mr-2">
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                              <i className="pi pi-star-fill text-yellow-500"></i>
                            </span>
                            <span className="font-medium">5</span>
                          </div>
                        </div>
                        <p className="text-600 p-0 m-0 line-height-3">
                          Sollicitudin nibh sit amet commodo nulla facilisi
                          nullam vehicula. Fringilla est ullamcorper eget nulla
                          facilisi etiam dignissim diam quis.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid -mr-3 -ml-3 py-8">
              <span className="text-900 p-2 text-4xl font-medium w-full">
                You may also like
              </span>
              <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                <div className="p-2">
                  <div className="relative">
                    <img
                      src="https://us.123rf.com/450wm/ddtek/ddtek1903/ddtek190300111/120609515-top-view-of-work-space-photographer-with-digital-camera-flash-cleaning-kit-white-table-background.jpg?ver=6"
                      className="w-full"
                      alt="prdoctpage-1-1"
                    />
                    <button
                      type="text"
                      className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                      style={{ top: "1rem", right: "1rem" }}
                      fdprocessedid="1z3aol"
                    >
                      <i className="pi pi-heart text-2xl text-500"></i>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "48px", width: "48px" }}
                      ></span>
                    </button>
                  </div>
                  <div className="flex align-items-center justify-content-between mt-3 mb-2">
                    <span className="text-900 font-medium text-xl">
                      Product Name
                    </span>
                    <span className="text-900 text-xl ml-3">$114</span>
                  </div>
                  <span className="text-600">Black</span>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                <div className="p-2">
                  <div className="relative">
                    <img
                      src="https://us.123rf.com/450wm/ddtek/ddtek1903/ddtek190300111/120609515-top-view-of-work-space-photographer-with-digital-camera-flash-cleaning-kit-white-table-background.jpg?ver=6"
                      className="w-full"
                      alt="prdoctpage-1-2"
                    />
                    <button
                      type="text"
                      className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                      style={{ top: "1rem", right: "1rem" }}
                      fdprocessedid="c5z9o"
                    >
                      <i className="pi pi-heart text-2xl text-500"></i>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "48px", width: "48px" }}
                      ></span>
                    </button>
                  </div>
                  <div className="flex align-items-center justify-content-between mt-3 mb-2">
                    <span className="text-900 font-medium text-xl">
                      Product Name
                    </span>
                    <span className="text-900 text-xl ml-3">$124</span>
                  </div>
                  <span className="text-600">Beige</span>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-3 mb-3 lg:mb-0">
                <div className="p-2">
                  <div className="relative">
                    <img
                      src="https://us.123rf.com/450wm/ddtek/ddtek1903/ddtek190300111/120609515-top-view-of-work-space-photographer-with-digital-camera-flash-cleaning-kit-white-table-background.jpg?ver=6"
                      className="w-full"
                      alt="prdoctpage-1-3"
                    />
                    <button
                      type="text"
                      className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                      style={{ top: "1rem", right: "1rem" }}
                      fdprocessedid="is1b1"
                    >
                      <i className="pi pi-heart text-2xl text-500"></i>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "48px", width: "48px" }}
                      ></span>
                    </button>
                  </div>
                  <div className="flex align-items-center justify-content-between mt-3 mb-2">
                    <span className="text-900 font-medium text-xl">
                      Product Name
                    </span>
                    <span className="text-900 text-xl ml-3">$142</span>
                  </div>
                  <span className="text-600">White</span>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-3">
                <div className="p-2">
                  <div className="relative">
                    <img
                      src="https://us.123rf.com/450wm/ddtek/ddtek1903/ddtek190300111/120609515-top-view-of-work-space-photographer-with-digital-camera-flash-cleaning-kit-white-table-background.jpg?ver=6"
                      className="w-full"
                      alt="prdoctpage-1-4"
                    />
                    <button
                      type="text"
                      className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300"
                      style={{ top: "1rem", right: "1rem" }}
                      fdprocessedid="fp3t1i"
                    >
                      <i className="pi pi-heart text-2xl text-500"></i>
                      <span
                        role="presentation"
                        className="p-ink"
                        style={{ height: "48px", width: "48px" }}
                      ></span>
                    </button>
                  </div>
                  <div className="flex align-items-center justify-content-between mt-3 mb-2">
                    <span className="text-900 font-medium text-xl">
                      Product Name
                    </span>
                    <span className="text-900 text-xl ml-3">$120</span>
                  </div>
                  <span className="text-600">Black</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-nogutter surface-section px-4 py-4 md:px-6 lg:px-8 border-top-1 surface-border">
            <div className="col-12 lg:col-6 lg:border-right-1 surface-border">
              <img
                src="/demo/images/blocks/logos/peak-700.svg"
                className="w-9rem mx-auto lg:mx-0"
                alt="Peak logo"
              />
              <span className="text-900 block mt-4 mr-3">
                Aliquam id diam maecenas ultricies. Faucibus pulvinar elementum
                integer enim neque volutpat ac tincidunt vitae.
              </span>
              <span className="text-500 block mt-4">
                © 2022, ApnaDost. Powered by Dark Coders.
              </span>
            </div>
            <div className="col-12 md:col-6 lg:col-3 mt-4 lg:mt-0 lg:pl-4 flex flex-column">
              <span className="text-900 text-xl font-medium block">Company</span>
              <ul className="list-none p-0">
                <li>
                  <a
                    tabindex="0"
                    className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                  >
                    About ApnaDost
                  </a>
                </li>
                <li>
                  <a
                    tabindex="0"
                    className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                  >
                    Factories
                  </a>
                </li>
                <li>
                  <a
                    tabindex="0"
                    className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    tabindex="0"
                    className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                  >
                    Environmental Initiatives
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 lg:col-3 md:col-6 flex mt-4 lg:mt-0 lg:pl-4 flex-column">
              <span className="text-900 text-xl font-medium block">Account</span>
              <ul className="list-none p-0">
                <li>
                  <a
                    tabindex="0"
                    className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                  >
                    Manage Account
                  </a>
                </li>
                <li>
                  <a
                    tabindex="0"
                    className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                  >
                    Saved Items
                  </a>
                </li>
                <li>
                  <a
                    tabindex="0"
                    className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                  >
                    My Cart
                  </a>
                </li>
                <li>
                  <a
                    tabindex="0"
                    className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                  >
                    Wishlist
                  </a>
                </li>
                <li>
                  <a
                    tabindex="0"
                    className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block"
                  >
                    Orders &amp; Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="surface-900 py-6 lg:py-4 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
            <ul className="list-none p-0 mb-0 flex flex-column md:flex-row flex-order-1 lg:flex-order-0 mt-4 lg:mt-0">
              <li className="mr-4 mt-3 lg:mt-0">
                <a tabindex="0" className="cursor-pointer text-0">
                  Investor Relations
                </a>
              </li>
              <li className="mr-4 mt-3 lg:mt-0">
                <a tabindex="0" className="cursor-pointer text-0">
                  Data Privacy
                </a>
              </li>
              <li className="mr-4 mt-3 lg:mt-0">
                <a tabindex="0" className="cursor-pointer text-0">
                  Terms of Service
                </a>
              </li>
              <li className="mr-4 mt-3 lg:mt-0">
                <a tabindex="0" className="cursor-pointer text-0">
                  Legal Information
                </a>
              </li>
            </ul>
            <div className="flex align-items-center flex-order-0 lg:flex-order-1">
              <a tabindex="0" className="cursor-pointer mr-3 lg:mt-0 block">
                <i className="pi pi-facebook surface-section p-1 text-sm border-circle text-900"></i>
              </a>
              <a tabindex="0" className="cursor-pointer mr-3 lg:mt-0 block">
                <i className="pi pi-twitter surface-section p-1 text-sm border-circle text-900"></i>
              </a>
              <a tabindex="0" className="cursor-pointer mr-3 lg:mt-0 block">
                <i className="pi pi-youtube surface-section p-1 text-sm border-circle text-900"></i>
              </a>
              <a tabindex="0" className="cursor-pointer lg:mt-0 block">
                <i className="pi pi-google surface-section p-1 text-sm border-circle text-900"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
