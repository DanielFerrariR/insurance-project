import React from 'react'
import AgeStep from '../organisms/AgeStep'
import EmailStep from '../organisms/EmailStep'
import SummaryStep from '../organisms/SummaryStep'
import NameStep from '../organisms/NameStep'
import { useSelector } from '../../store'
import {
  updateHomeInsuranceForm,
  resetHomeInsuranceForm,
} from '../../store/homeInsurance'

const HomeInsurance: React.FC = () => {
  const homeInsurance = useSelector((state) => state.homeInsurance)

  return (
    <>
      <h4>Buying Car Insurance </h4>
      {homeInsurance.step === 0 && (
        <NameStep
          insurance={homeInsurance}
          updateForm={updateHomeInsuranceForm}
        />
      )}
      {homeInsurance.step === 1 && (
        <EmailStep
          insurance={homeInsurance}
          updateForm={updateHomeInsuranceForm}
        />
      )}
      {homeInsurance.step === 2 && (
        <AgeStep
          insurance={homeInsurance}
          updateForm={updateHomeInsuranceForm}
        />
      )}
      {homeInsurance.step === 3 && (
        <SummaryStep
          insurance={homeInsurance}
          resetForm={resetHomeInsuranceForm}
        />
      )}
    </>
  )
}

export default HomeInsurance
