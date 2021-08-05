import * as React from 'react'
import { useDispatch } from '../../store'
import {
  CarInsuranceState,
  addCarInsuranceName,
  addCarInsuranceSurname,
  addCarInsuranceStep,
} from '../../store/carInsurance'
import {
  LifeInsuranceState,
  addLifeInsuranceName,
  addLifeInsuranceSurname,
  addLifeInsuranceStep,
} from '../../store/lifeInsurance'
import {
  HomeInsuranceState,
  addHomeInsuranceName,
  addHomeInsuranceSurname,
  addHomeInsuranceStep,
} from '../../store/homeInsurance'

interface NameStepProps {
  insurance: CarInsuranceState | LifeInsuranceState | HomeInsuranceState
  addName:
    | typeof addCarInsuranceName
    | typeof addLifeInsuranceName
    | typeof addHomeInsuranceName
  addSurname:
    | typeof addCarInsuranceSurname
    | typeof addLifeInsuranceSurname
    | typeof addHomeInsuranceSurname
  addStep:
    | typeof addCarInsuranceStep
    | typeof addLifeInsuranceStep
    | typeof addHomeInsuranceStep
}

const NameStep: React.FC<NameStepProps> = ({
  insurance,
  addName,
  addSurname,
  addStep,
}) => {
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <label htmlFor="name-step-name">Name</label> :{' '}
        <input
          id="name-step-name"
          placeholder={`Type your name`}
          onChange={(event) => dispatch(addName(insurance, event.target.value))}
          value={insurance.name}
        />
        <br />
        <label htmlFor="name-step-surname">Surname</label> :{' '}
        <input
          id="name-step-surname"
          placeholder={`Type your surname`}
          onChange={(event) =>
            dispatch(addSurname(insurance, event.target.value))
          }
          value={insurance.surname}
        />
      </div>
      <button
        disabled={insurance.name.length === 0 || insurance.surname.length === 0}
        onClick={() => dispatch(addStep(insurance))}
      >
        Next
      </button>
    </>
  )
}

export default NameStep
