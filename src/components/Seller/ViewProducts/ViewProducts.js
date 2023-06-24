import React from 'react'
import SellerSidebar from '../SellerLayout/SellerSidebar'

const ViewProducts = () => {
  return (
    <>
    <div class="wrapper d-flex align-items-stretch">
      <SellerSidebar />
      <div id="content" class="p-4 p-md-5 pt-5">
        <h2 class="mb-4">View all Sell/Rent/Donate Products here</h2>
      </div>
    </div>
    </>
  )
}

export default ViewProducts