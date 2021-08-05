import {
  CarInsuranceState,
  ADD_CAR_INSURANCE_NAME,
  ADD_CAR_INSURANCE_SURNAME,
  ADD_CAR_INSURANCE_EMAIL,
  ADD_CAR_INSURANCE_AGE,
  ADD_CAR_INSURANCE_STEP,
  RESET_CAR_INSURANCE_FORM,
  AddCarInsuranceNameAction,
  AddCarInsuranceSurnameAction,
  AddCarInsuranceEmailAction,
  AddCarInsuranceAgeAction,
  AddCarInsuranceStepAction,
  ResetCarInsuranceFormAction,
} from './types'

const addCarInsuranceName = (
  carInsurance: CarInsuranceState,
  name: CarInsuranceState['name']
): AddCarInsuranceNameAction => {
  const newCarInsurance = { ...carInsurance, name }

  return {
    type: ADD_CAR_INSURANCE_NAME,
    payload: newCarInsurance,
  }
}

const addCarInsuranceSurname = (
  carInsurance: CarInsuranceState,
  surname: CarInsuranceState['surname']
): AddCarInsuranceSurnameAction => {
  const newCarInsurance = { ...carInsurance, surname }

  return {
    type: ADD_CAR_INSURANCE_SURNAME,
    payload: newCarInsurance,
  }
}

const addCarInsuranceEmail = (
  carInsurance: CarInsuranceState,
  email: CarInsuranceState['name']
): AddCarInsuranceEmailAction => {
  const newCarInsurance = { ...carInsurance, email }

  return {
    type: ADD_CAR_INSURANCE_EMAIL,
    payload: newCarInsurance,
  }
}

const addCarInsuranceAge = (
  carInsurance: CarInsuranceState,
  age: CarInsuranceState['age']
): AddCarInsuranceAgeAction => {
  const newCarInsurance = { ...carInsurance, age }

  return {
    type: ADD_CAR_INSURANCE_AGE,
    payload: newCarInsurance,
  }
}

const addCarInsuranceStep = (
  carInsurance: CarInsuranceState
): AddCarInsuranceStepAction => {
  const newCarInsurance = { ...carInsurance, step: carInsurance.step + 1 }

  return {
    type: ADD_CAR_INSURANCE_STEP,
    payload: newCarInsurance,
  }
}

const resetCarInsuranceForm = (): ResetCarInsuranceFormAction => {
  return {
    type: RESET_CAR_INSURANCE_FORM,
  }
}

export {
  addCarInsuranceName,
  addCarInsuranceSurname,
  addCarInsuranceEmail,
  addCarInsuranceAge,
  addCarInsuranceStep,
  resetCarInsuranceForm,
}
