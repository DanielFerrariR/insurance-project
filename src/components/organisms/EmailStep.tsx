import * as React from 'react'
import { useDispatch } from '../../store'
import {
  CarInsuranceState,
  addEmail as addCarInsuranceEmail,
  addStep as addCarInsuranceStep,
} from '../../store/carInsurance'
import {
  LifeInsuranceState,
  addEmail as addLifeInsuranceEmail,
  addStep as addLifeInsuranceStep,
} from '../../store/lifeInsurance'
import {
  HomeInsuranceState,
  addEmail as addHomeInsuranceEmail,
  addStep as addHomeInsuranceStep,
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
