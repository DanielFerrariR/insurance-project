import * as React from 'react'
import { useDispatch } from '../../store'
import {
  CarInsuranceState,
  addCarInsuranceEmail,
  addCarInsuranceStep,
} from '../../store/carInsurance'
import {
  LifeInsuranceState,
  addLifeInsuranceEmail,
  addLifeInsuranceStep,
} from '../../store/lifeInsurance'
import {
  HomeInsuranceState,
  addHomeInsuranceEmail,
  addHomeInsuranceStep,
} from '../../store/homeInsurance'

interface EmailStepProps {
  insurance: CarInsuranceState | LifeInsuranceState | HomeInsuranceState
  addEmail:
    | typeof addCarInsuranceEmail
    | typeof addLifeInsuranceEmail
    | typeof addHomeInsuranceEmail
  addStep:
    | typeof addCarInsuranceStep
    | typeof addLifeInsuranceStep
    | typeof addHomeInsuranceStep
}

const EmailStep: React.FC<EmailStepProps> = ({
  insurance,
  addEmail,
  addStep,
}) => {
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <label htmlFor="email-step-email">Email:</label>{' '}
        <input
          id="email-step-email"
          type="email"
          onChange={(event) =>
            dispatch(addEmail(insurance, event.target.value))
          }
          value={insurance.email}
        />
      </div>
      <button
        disabled={insurance.email.length === 0}
        onClick={() => dispatch(addStep(insurance))}
      >
        Next
      </button>
    </>
  )
}

export default EmailStep
