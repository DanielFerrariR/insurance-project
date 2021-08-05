import {
  CarInsuranceState,
  ADD_NAME,
  ADD_SURNAME,
  ADD_EMAIL,
  ADD_AGE,
  ADD_STEP,
  RESET_FORM,
  AddNameAction,
  AddSurnameAction,
  AddEmailAction,
  AddAgeAction,
  AddStepAction,
  ResetFormAction,
} from './types'

const addName = (
  carInsurance: CarInsuranceState,
  name: CarInsuranceState['name']
): AddNameAction => {
  const newCarInsurance = { ...carInsurance, name }

  return {
    type: ADD_NAME,
    payload: newCarInsurance,
  }
}

const addSurname = (
  carInsurance: CarInsuranceState,
  surname: CarInsuranceState['surname']
): AddSurnameAction => {
  const newCarInsurance = { ...carInsurance, surname }

  return {
    type: ADD_SURNAME,
    payload: newCarInsurance,
  }
}

const addEmail = (
  carInsurance: CarInsuranceState,
  email: CarInsuranceState['name']
): AddEmailAction => {
  const newCarInsurance = { ...carInsurance, email }

  return {
    type: ADD_EMAIL,
    payload: newCarInsurance,
  }
}

const addAge = (
  carInsurance: CarInsuranceState,
  age: CarInsuranceState['age']
): AddAgeAction => {
  const newCarInsurance = { ...carInsurance, age }

  return {
    type: ADD_AGE,
    payload: newCarInsurance,
  }
}

const addStep = (carInsurance: CarInsuranceState): AddStepAction => {
  const newCarInsurance = { ...carInsurance, step: carInsurance.step + 1 }

  return {
    type: ADD_STEP,
    payload: newCarInsurance,
  }
}

const resetForm = (): ResetFormAction => {
  return {
    type: RESET_FORM,
  }
}

export { addName, addSurname, addEmail, addAge, addStep, resetForm }
