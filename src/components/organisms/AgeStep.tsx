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

interface AgeStepProps {
  insurance: CarInsuranceState | LifeInsuranceState | HomeInsuranceState
  updateForm:
    | typeof updateCarInsuranceForm
    | typeof updateLifeInsuranceForm
    | typeof updateHomeInsuranceForm
}

const AgeStep: React.FC<AgeStepProps> = ({ insurance, updateForm }) => {
  const dispatch = useDispatch()

  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={(event) =>
            dispatch(
              updateForm({ ...insurance, age: Number(event.target.value) })
            )
          }
          value={insurance.age}
        />
      </div>
      <button
        disabled={insurance.age === 0}
        onClick={() =>
          dispatch(updateForm({ ...insurance, step: insurance.step + 1 }))
        }
      >
        Next
      </button>
    </>
  )
}

export default AgeStep
