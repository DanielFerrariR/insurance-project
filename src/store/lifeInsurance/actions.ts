import {
  LifeInsuranceState,
  ADD_LIFE_INSURANCE_NAME,
  ADD_LIFE_INSURANCE_SURNAME,
  ADD_LIFE_INSURANCE_EMAIL,
  ADD_LIFE_INSURANCE_AGE,
  ADD_LIFE_INSURANCE_STEP,
  RESET_LIFE_INSURANCE_FORM,
  AddLifeInsuranceNameAction,
  AddLifeInsuranceSurnameAction,
  AddLifeInsuranceEmailAction,
  AddLifeInsuranceAgeAction,
  AddLifeInsuranceStepAction,
  ResetLifeInsuranceFormAction,
} from './types'

const addLifeInsuranceName = (
  carInsurance: LifeInsuranceState,
  name: LifeInsuranceState['name']
): AddLifeInsuranceNameAction => {
  const newLifeInsurance = { ...carInsurance, name }

  return {
    type: ADD_LIFE_INSURANCE_NAME,
    payload: newLifeInsurance,
  }
}

const addLifeInsuranceSurname = (
  carInsurance: LifeInsuranceState,
  surname: LifeInsuranceState['surname']
): AddLifeInsuranceSurnameAction => {
  const newLifeInsurance = { ...carInsurance, surname }

  return {
    type: ADD_LIFE_INSURANCE_SURNAME,
    payload: newLifeInsurance,
  }
}

const addLifeInsuranceEmail = (
  carInsurance: LifeInsuranceState,
  email: LifeInsuranceState['name']
): AddLifeInsuranceEmailAction => {
  const newLifeInsurance = { ...carInsurance, email }

  return {
    type: ADD_LIFE_INSURANCE_EMAIL,
    payload: newLifeInsurance,
  }
}

const addLifeInsuranceAge = (
  carInsurance: LifeInsuranceState,
  age: LifeInsuranceState['age']
): AddLifeInsuranceAgeAction => {
  const newLifeInsurance = { ...carInsurance, age }

  return {
    type: ADD_LIFE_INSURANCE_AGE,
    payload: newLifeInsurance,
  }
}

const addLifeInsuranceStep = (
  carInsurance: LifeInsuranceState
): AddLifeInsuranceStepAction => {
  const newLifeInsurance = { ...carInsurance, step: carInsurance.step + 1 }

  return {
    type: ADD_LIFE_INSURANCE_STEP,
    payload: newLifeInsurance,
  }
}

const resetLifeInsuranceForm = (): ResetLifeInsuranceFormAction => {
  return {
    type: RESET_LIFE_INSURANCE_FORM,
  }
}

export {
  addLifeInsuranceName,
  addLifeInsuranceSurname,
  addLifeInsuranceEmail,
  addLifeInsuranceAge,
  addLifeInsuranceStep,
  resetLifeInsuranceForm,
}
