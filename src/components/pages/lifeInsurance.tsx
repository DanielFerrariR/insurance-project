import * as React from 'react'
import { AgeStep, EmailStep, SummaryStep, NameStep } from '../organisms'
import { useSelector, useDispatch } from '../../store'
import {
  updateLifeInsuranceForm,
  resetLifeInsuranceForm,
  LifeInsuranceState,
} from '../../store/lifeInsurance'

const LifeInsurance: React.FC = () => {
  const lifeInsurance = useSelector((state) => state.lifeInsurance)
  const dispatch = useDispatch()
  const steps = [NameStep, EmailStep, AgeStep, SummaryStep]
  const Component = steps[lifeInsurance.step]

  const updatedForm = (form: Partial<LifeInsuranceState>) =>
    dispatch(updateLifeInsuranceForm({ ...lifeInsurance, ...form }))

  const resetForm = () => dispatch(resetLifeInsuranceForm())

  return (
    <>
      <h4>Buying Life Insurance </h4>
      <Component
        insurance={lifeInsurance}
        updateForm={updatedForm}
        resetForm={resetForm}
      />
    </>
  )
}

export default LifeInsurance
