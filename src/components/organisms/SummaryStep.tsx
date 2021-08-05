import * as React from 'react'
import { Link, useHistory } from 'react-router-dom'

interface InsuranceState {
  name: string
  surname: string
  email: string
  age: number
}
interface SummaryStepProps {
  insurance: InsuranceState
  resetForm: () => void
}

const SummaryStep: React.FC<SummaryStepProps> = ({ insurance, resetForm }) => {
  const history = useHistory()

  const handlePurchase = () => {
    resetForm()
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
