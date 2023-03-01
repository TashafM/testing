import React from 'react'
import DataTable from '../../../../components/DataTable/DataTable'
import { colPastPartners } from '../data'

const PastPartners = ({
  selectedIds,
  setSelectedIds,
  pastMemberData,
  pastPartnerApi,
  currPartnersApi,
  getPastPartners,
  getCurrPartners
}) => {
  return (
    <div>
      <DataTable
        columns={colPastPartners}
        datum={pastMemberData}
        selectedIds={selectedIds}
        api={pastPartnerApi}
        api2={currPartnersApi}
        getDataFunc={getPastPartners}
        getDataFunc2={getCurrPartners}
        setSelectedIds={setSelectedIds}
        partners={true}
        resActive={true}
      />
    </div>
  )
}

export default PastPartners
