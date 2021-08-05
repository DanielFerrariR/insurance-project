import {
  HomeInsuranceState,
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
  homeInsurance: HomeInsuranceState,
  name: HomeInsuranceState['name']
): AddNameAction => {
  const newHomeInsurance = { ...homeInsurance, name }

  return {
    type: ADD_NAME,
    payload: newHomeInsurance,
  }
}

const addSurname = (
  homeInsurance: HomeInsuranceState,
  surname: HomeInsuranceState['surname']
): AddSurnameAction => {
  const newHomeInsurance = { ...homeInsurance, surname }

  return {
    type: ADD_SURNAME,
    payload: newHomeInsurance,
  }
}

const addEmail = (
  homeInsurance: HomeInsuranceState,
  email: HomeInsuranceState['name']
): AddEmailAction => {
  const newHomeInsurance = { ...homeInsurance, email }

  return {
    type: ADD_EMAIL,
    payload: newHomeInsurance,
  }
}

const addAge = (
  homeInsurance: HomeInsuranceState,
  age: HomeInsuranceState['age']
): AddAgeAction => {
  const newHomeInsurance = { ...homeInsurance, age }

  return {
    type: ADD_AGE,
    payload: newHomeInsurance,
  }
}

const addStep = (homeInsurance: HomeInsuranceState): AddStepAction => {
  const newHomeInsurance = { ...homeInsurance, step: homeInsurance.step + 1 }

  return {
    type: ADD_STEP,
    payload: newHomeInsurance,
  }
}

const resetForm = (): ResetFormAction => {
  return {
    type: RESET_FORM,
  }
}

export { addName, addSurname, addEmail, addAge, addStep, resetForm }
