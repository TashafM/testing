import React from 'react'
import { useLocation } from 'react-router-dom'
import { partnerAddressDetails } from '../components/data';
import PartnersTable from '../components/PartnersTable/PartnersTable';

const PartnerAddress = () => {
  const data = useLocation().state.data;
  return (
    <div className="partner-about">
      <PartnersTable
        data={data}
        staticData={partnerAddressDetails}
        title={"Address"}
      />
    </div>
  )
}

export default PartnerAddress
