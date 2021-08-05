import React from 'react'
import AgeStep from '../organisms/AgeStep'
import EmailStep from '../organisms/EmailStep'
import SummaryStep from '../organisms/SummaryStep'
import NameStep from '../organisms/NameStep'
import { useSelector, useDispatch } from '../../store'
import {
  updateCarInsuranceForm,
  resetCarInsuranceForm,
  CarInsuranceState,
} from '../../store/carInsurance'

const CarInsurance: React.FC = () => {
  const carInsurance = useSelector((state) => state.carInsurance)
  const dispatch = useDispatch()

  const updatedForm = (form: Partial<CarInsuranceState>) =>
    dispatch(updateCarInsuranceForm({ ...carInsurance, ...form }))

  const resetForm = () => resetCarInsuranceForm()

  return (
    <>
      <h4>Buying Car Insurance </h4>
      {carInsurance.step === 0 && (
        <NameStep insurance={carInsurance} updateForm={updatedForm} />
      )}
      {carInsurance.step === 1 && (
        <EmailStep insurance={carInsurance} updateForm={updatedForm} />
      )}
      {carInsurance.step === 2 && (
        <AgeStep insurance={carInsurance} updateForm={updatedForm} />
      )}
      {carInsurance.step === 3 && (
        <SummaryStep insurance={carInsurance} resetForm={resetForm} />
      )}
    </>
  )
}

export default CarInsurance
