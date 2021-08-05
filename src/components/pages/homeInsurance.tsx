import React from 'react'
import AgeStep from '../organisms/AgeStep'
import EmailStep from '../organisms/EmailStep'
import SummaryStep from '../organisms/SummaryStep'
import NameStep from '../organisms/NameStep'
import { useSelector, useDispatch } from '../../store'
import {
  updateHomeInsuranceForm,
  resetHomeInsuranceForm,
  HomeInsuranceState,
} from '../../store/homeInsurance'

const HomeInsurance: React.FC = () => {
  const homeInsurance = useSelector((state) => state.homeInsurance)
  const dispatch = useDispatch()

  const updatedForm = (form: Partial<HomeInsuranceState>) =>
    dispatch(updateHomeInsuranceForm({ ...homeInsurance, ...form }))

  const resetForm = () => dispatch(resetHomeInsuranceForm())

  return (
    <>
      <h4>Buying Home Insurance </h4>
      {homeInsurance.step === 0 && (
        <NameStep insurance={homeInsurance} updateForm={updatedForm} />
      )}
      {homeInsurance.step === 1 && (
        <EmailStep insurance={homeInsurance} updateForm={updatedForm} />
      )}
      {homeInsurance.step === 2 && (
        <AgeStep insurance={homeInsurance} updateForm={updatedForm} />
      )}
      {homeInsurance.step === 3 && (
        <SummaryStep insurance={homeInsurance} resetForm={resetForm} />
      )}
    </>
  )
}

export default HomeInsurance
