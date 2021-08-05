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

interface NameStepProps {
  insurance: CarInsuranceState | LifeInsuranceState | HomeInsuranceState
  updateForm:
    | typeof updateCarInsuranceForm
    | typeof updateLifeInsuranceForm
    | typeof updateHomeInsuranceForm
}

const NameStep: React.FC<NameStepProps> = ({ insurance, updateForm }) => {
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <label htmlFor="name-step-name">Name</label> :{' '}
        <input
          id="name-step-name"
          placeholder={`Type your name`}
          onChange={(event) =>
            dispatch(updateForm({ ...insurance, name: event.target.value }))
          }
          value={insurance.name}
        />
        <br />
        <label htmlFor="name-step-surname">Surname</label> :{' '}
        <input
          id="name-step-surname"
          placeholder={`Type your surname`}
          onChange={(event) =>
            dispatch(updateForm({ ...insurance, surname: event.target.value }))
          }
          value={insurance.surname}
        />
      </div>
      <button
        disabled={insurance.name.length === 0 || insurance.surname.length === 0}
        onClick={() =>
          dispatch(updateForm({ ...insurance, step: insurance.step + 1 }))
        }
      >
        Next
      </button>
    </>
  )
}

export default NameStep
