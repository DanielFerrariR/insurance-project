import React from 'react'
import AgeStep from '../organisms/AgeStep'
import EmailStep from '../organisms/EmailStep'
import SummaryStep from '../organisms/SummaryStep'
import NameStep from '../organisms/NameStep'
import { useSelector } from '../../store'
import {
  addCarInsuranceName,
  addCarInsuranceSurname,
  addCarInsuranceEmail,
  addCarInsuranceAge,
  addCarInsuranceStep,
  resetCarInsuranceForm,
} from '../../store/carInsurance'

const CarInsurance: React.FC = () => {
  const carInsurance = useSelector((state) => state.carInsurance)

  return (
    <>
      <h4>Buying Car Insurance </h4>
      {carInsurance.step === 0 && (
        <NameStep
          insurance={carInsurance}
          addName={addCarInsuranceName}
          addSurname={addCarInsuranceSurname}
          addStep={addCarInsuranceStep}
        />
      )}
      {carInsurance.step === 1 && (
        <EmailStep
          insurance={carInsurance}
          addEmail={addCarInsuranceEmail}
          addStep={addCarInsuranceStep}
        />
      )}
      {carInsurance.step === 2 && (
        <AgeStep
          insurance={carInsurance}
          addAge={addCarInsuranceAge}
          addStep={addCarInsuranceStep}
        />
      )}
      {carInsurance.step === 3 && (
        <SummaryStep
          insurance={carInsurance}
          resetForm={resetCarInsuranceForm}
        />
      )}
    </>
  )
}

export default CarInsurance
