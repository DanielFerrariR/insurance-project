import React from 'react'
import { NameStep, AgeStep, EmailStep, SummaryStep } from '../organisms'
import { useSelector } from '../../store'
import {
  addName,
  addSurname,
  addEmail,
  addAge,
  addStep,
  resetForm,
} from '../../store/lifeInsurance'

const LifeInsurance: React.FC = () => {
  const insurance = useSelector((state) => state.lifeInsurance)

  return (
    <>
      <h4>Buying Life Insurance</h4>
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

export default LifeInsurance
