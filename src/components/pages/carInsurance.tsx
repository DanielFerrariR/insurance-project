import * as React from 'react'
import { AgeStep, EmailStep, SummaryStep, NameStep } from '../organisms'
import { useSelector, useDispatch } from '../../store'
import {
  updateCarInsuranceForm,
  resetCarInsuranceForm,
  CarInsuranceState,
} from '../../store/carInsurance'

const CarInsurance: React.FC = () => {
  const carInsurance = useSelector((state) => state.carInsurance)
  const dispatch = useDispatch()
  const steps = [NameStep, EmailStep, AgeStep, SummaryStep]
  const Component = steps[carInsurance.step]

  const updatedForm = (form: Partial<CarInsuranceState>) =>
    dispatch(updateCarInsuranceForm({ ...carInsurance, ...form }))

  const resetForm = () => dispatch(resetCarInsuranceForm())

  return (
    <>
      <h4>Buying Car Insurance </h4>
      <Component
        insurance={carInsurance}
        updateForm={updatedForm}
        resetForm={resetForm}
      />
    </>
  )
}

export default CarInsurance
