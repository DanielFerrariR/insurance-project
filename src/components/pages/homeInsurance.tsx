import * as React from 'react'
import { AgeStep, EmailStep, SummaryStep, NameStep } from '../organisms'
import { useSelector, useDispatch } from '../../store'
import {
  updateHomeInsuranceForm,
  resetHomeInsuranceForm,
  HomeInsuranceState,
} from '../../store/homeInsurance'

const HomeInsurance: React.FC = () => {
  const homeInsurance = useSelector((state) => state.homeInsurance)
  const dispatch = useDispatch()
  const steps = [NameStep, EmailStep, AgeStep, SummaryStep]
  const Component = steps[homeInsurance.step]

  const updatedForm = (form: Partial<HomeInsuranceState>) =>
    dispatch(updateHomeInsuranceForm({ ...homeInsurance, ...form }))

  const resetForm = () => dispatch(resetHomeInsuranceForm())

  return (
    <>
      <h4>Buying Home Insurance </h4>
      <Component
        insurance={homeInsurance}
        updateForm={updatedForm}
        resetForm={resetForm}
      />
    </>
  )
}

export default HomeInsurance
