import * as React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from '../../store'
import {
  CarInsuranceState,
  resetCarInsuranceForm,
} from '../../store/carInsurance'
import {
  LifeInsuranceState,
  resetLifeInsuranceForm,
} from '../../store/lifeInsurance'
import {
  HomeInsuranceState,
  resetHomeInsuranceForm,
} from '../../store/homeInsurance'

interface SummaryStepProps {
  insurance: CarInsuranceState | LifeInsuranceState | HomeInsuranceState
  resetForm:
    | typeof resetCarInsuranceForm
    | typeof resetLifeInsuranceForm
    | typeof resetHomeInsuranceForm
}

const SummaryStep: React.FC<SummaryStepProps> = ({ insurance, resetForm }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handlePurchase = () => {
    dispatch(resetForm())
    history.push('/')
  }

  return (
    <>
      <div>Name: {insurance.name}</div>
      <div>Surname: {insurance.surname}</div>
      <div>Email: {insurance.email}</div>
      <div>Age: {insurance.age}</div>
      <div>
        <Link to="" onClick={handlePurchase}>
          Purchase
        </Link>
      </div>
    </>
  )
}

export default SummaryStep
