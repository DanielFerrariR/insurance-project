import React from 'react'
import AgeStep from '../organisms/AgeStep'
import EmailStep from '../organisms/EmailStep'
import SummaryStep from '../organisms/SummaryStep'
import NameStep from '../organisms/NameStep'
import { useSelector, useDispatch } from '../../store'
import {
  updateLifeInsuranceForm,
  resetLifeInsuranceForm,
  LifeInsuranceState,
} from '../../store/lifeInsurance'

const LifeInsurance: React.FC = () => {
  const lifeInsurance = useSelector((state) => state.lifeInsurance)
  const dispatch = useDispatch()

  const updatedForm = (form: Partial<LifeInsuranceState>) =>
    dispatch(updateLifeInsuranceForm({ ...lifeInsurance, ...form }))

  const resetForm = () => dispatch(resetLifeInsuranceForm())

  return (
    <>
      <h4>Buying Life Insurance </h4>
      {lifeInsurance.step === 0 && (
        <NameStep insurance={lifeInsurance} updateForm={updatedForm} />
      )}
      {lifeInsurance.step === 1 && (
        <EmailStep insurance={lifeInsurance} updateForm={updatedForm} />
      )}
      {lifeInsurance.step === 2 && (
        <AgeStep insurance={lifeInsurance} updateForm={updatedForm} />
      )}
      {lifeInsurance.step === 3 && (
        <SummaryStep insurance={lifeInsurance} resetForm={resetForm} />
      )}
    </>
  )
}

export default LifeInsurance
