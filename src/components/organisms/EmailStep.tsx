import * as React from 'react'
import { useDispatch } from '../../store'
import {
  CarInsuranceState,
  updateCarInsuranceForm,
} from '../../store/carInsurance'
import {
  LifeInsuranceState,
  updateLifeInsuranceForm,
} from '../../store/lifeInsurance'
import {
  HomeInsuranceState,
  updateHomeInsuranceForm,
} from '../../store/homeInsurance'

interface EmailStepProps {
  insurance: CarInsuranceState | LifeInsuranceState | HomeInsuranceState
  updateForm:
    | typeof updateCarInsuranceForm
    | typeof updateLifeInsuranceForm
    | typeof updateHomeInsuranceForm
}

const EmailStep: React.FC<EmailStepProps> = ({ insurance, updateForm }) => {
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <label htmlFor="email-step-email">Email:</label>{' '}
        <input
          id="email-step-email"
          type="email"
          onChange={(event) =>
            dispatch(updateForm({ ...insurance, email: event.target.value }))
          }
          value={insurance.email}
        />
      </div>
      <button
        disabled={insurance.email.length === 0}
        onClick={() =>
          dispatch(updateForm({ ...insurance, step: insurance.step + 1 }))
        }
      >
        Next
      </button>
    </>
  )
}

export default EmailStep
