import * as React from 'react'
import { useDispatch } from '../../store'
import {
  CarInsuranceState,
  addAge as addCarInsuranceAge,
  addStep as addCarInsuranceStep,
} from '../../store/carInsurance'
import {
  LifeInsuranceState,
  addAge as addLifeInsuranceAge,
  addStep as addLifeInsuranceStep,
} from '../../store/lifeInsurance'
import {
  HomeInsuranceState,
  addAge as addHomeInsuranceAge,
  addStep as addHomeInsuranceStep,
} from '../../store/homeInsurance'

interface AgeStepProps {
  insurance: CarInsuranceState | LifeInsuranceState | HomeInsuranceState
  addAge:
    | typeof addCarInsuranceAge
    | typeof addLifeInsuranceAge
    | typeof addHomeInsuranceAge
  addStep:
    | typeof addCarInsuranceStep
    | typeof addLifeInsuranceStep
    | typeof addHomeInsuranceStep
}

const AgeStep: React.FC<AgeStepProps> = ({ insurance, addAge, addStep }) => {
  const dispatch = useDispatch()

  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={(event) =>
            dispatch(addAge(insurance, Number(event.target.value)))
          }
          value={insurance.age}
        />
      </div>
      <button
        disabled={insurance.age === 0}
        onClick={() => dispatch(addStep(insurance))}
      >
        Next
      </button>
    </>
  )
}

export default AgeStep
