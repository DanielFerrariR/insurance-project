import React from 'react'
import AgeStep from '../organisms/AgeStep'
import EmailStep from '../organisms/EmailStep'
import SummaryStep from '../organisms/SummaryStep'
import NameStep from '../organisms/NameStep'
import { useSelector } from '../../store'
import {
  addName,
  addSurname,
  addEmail,
  addAge,
  addStep,
  resetForm,
} from '../../store/homeInsurance'

const HomeInsurance: React.FC = () => {
  const insurance = useSelector((state) => state.homeInsurance)

  return (
    <>
      <h4>Buying Home Insurance</h4>
      {insurance.step === 0 && (
        <NameStep
          insurance={insurance}
          addName={addName}
          addSurname={addSurname}
          addStep={addStep}
        />
      )}
      {insurance.step === 1 && (
        <EmailStep
          insurance={insurance}
          addEmail={addEmail}
          addStep={addStep}
        />
      )}
      {insurance.step === 2 && (
        <AgeStep insurance={insurance} addAge={addAge} addStep={addStep} />
      )}
      {insurance.step === 3 && (
        <SummaryStep insurance={insurance} resetForm={resetForm} />
      )}
    </>
  )
}

export default HomeInsurance
