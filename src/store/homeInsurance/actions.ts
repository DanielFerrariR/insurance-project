import {
  HomeInsuranceState,
  ADD_HOME_INSURANCE_NAME,
  ADD_HOME_INSURANCE_SURNAME,
  ADD_HOME_INSURANCE_EMAIL,
  ADD_HOME_INSURANCE_AGE,
  ADD_HOME_INSURANCE_STEP,
  RESET_HOME_INSURANCE_FORM,
  AddHomeInsuranceNameAction,
  AddHomeInsuranceSurnameAction,
  AddHomeInsuranceEmailAction,
  AddHomeInsuranceAgeAction,
  AddHomeInsuranceStepAction,
  ResetHomeInsuranceFormAction,
} from './types'

const addHomeInsuranceName = (
  carInsurance: HomeInsuranceState,
  name: HomeInsuranceState['name']
): AddHomeInsuranceNameAction => {
  const newHomeInsurance = { ...carInsurance, name }

  return {
    type: ADD_HOME_INSURANCE_NAME,
    payload: newHomeInsurance,
  }
}

const addHomeInsuranceSurname = (
  carInsurance: HomeInsuranceState,
  surname: HomeInsuranceState['surname']
): AddHomeInsuranceSurnameAction => {
  const newHomeInsurance = { ...carInsurance, surname }

  return {
    type: ADD_HOME_INSURANCE_SURNAME,
    payload: newHomeInsurance,
  }
}

const addHomeInsuranceEmail = (
  carInsurance: HomeInsuranceState,
  email: HomeInsuranceState['name']
): AddHomeInsuranceEmailAction => {
  const newHomeInsurance = { ...carInsurance, email }

  return {
    type: ADD_HOME_INSURANCE_EMAIL,
    payload: newHomeInsurance,
  }
}

const addHomeInsuranceAge = (
  carInsurance: HomeInsuranceState,
  age: HomeInsuranceState['age']
): AddHomeInsuranceAgeAction => {
  const newHomeInsurance = { ...carInsurance, age }

  return {
    type: ADD_HOME_INSURANCE_AGE,
    payload: newHomeInsurance,
  }
}

const addHomeInsuranceStep = (
  carInsurance: HomeInsuranceState
): AddHomeInsuranceStepAction => {
  const newHomeInsurance = { ...carInsurance, step: carInsurance.step + 1 }

  return {
    type: ADD_HOME_INSURANCE_STEP,
    payload: newHomeInsurance,
  }
}

const resetHomeInsuranceForm = (): ResetHomeInsuranceFormAction => {
  return {
    type: RESET_HOME_INSURANCE_FORM,
  }
}

export {
  addHomeInsuranceName,
  addHomeInsuranceSurname,
  addHomeInsuranceEmail,
  addHomeInsuranceAge,
  addHomeInsuranceStep,
  resetHomeInsuranceForm,
}
