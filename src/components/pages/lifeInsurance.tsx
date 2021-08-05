import React from 'react'
import AgeStep from '../organisms/AgeStep'
import EmailStep from '../organisms/EmailStep'
import SummaryStep from '../organisms/SummaryStep'
import NameStep from '../organisms/NameStep'
import { useSelector } from '../../store'
import {
  updateLifeInsuranceForm,
  resetLifeInsuranceForm,
} from '../../store/lifeInsurance'

const LifeInsurance: React.FC = () => {
  const lifeInsurance = useSelector((state) => state.lifeInsurance)

  return (
    <>
      <h4>Buying Car Insurance </h4>
      {lifeInsurance.step === 0 && (
        <NameStep
          insurance={lifeInsurance}
          updateForm={updateLifeInsuranceForm}
        />
      )}
      {lifeInsurance.step === 1 && (
        <EmailStep
          insurance={lifeInsurance}
          updateForm={updateLifeInsuranceForm}
        />
      )}
      {lifeInsurance.step === 2 && (
        <AgeStep
          insurance={lifeInsurance}
          updateForm={updateLifeInsuranceForm}
        />
      )}
      {lifeInsurance.step === 3 && (
        <SummaryStep
          insurance={lifeInsurance}
          resetForm={resetLifeInsuranceForm}
        />
      )}
    </>
  )
}

export default LifeInsurance
