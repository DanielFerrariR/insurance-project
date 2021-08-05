import {
  LifeInsuranceState,
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
  lifeInsurance: LifeInsuranceState,
  name: LifeInsuranceState['name']
): AddNameAction => {
  const newLifeInsurance = { ...lifeInsurance, name }

  return {
    type: ADD_NAME,
    payload: newLifeInsurance,
  }
}

const addSurname = (
  lifeInsurance: LifeInsuranceState,
  surname: LifeInsuranceState['surname']
): AddSurnameAction => {
  const newLifeInsurance = { ...lifeInsurance, surname }

  return {
    type: ADD_SURNAME,
    payload: newLifeInsurance,
  }
}

const addEmail = (
  lifeInsurance: LifeInsuranceState,
  email: LifeInsuranceState['name']
): AddEmailAction => {
  const newLifeInsurance = { ...lifeInsurance, email }

  return {
    type: ADD_EMAIL,
    payload: newLifeInsurance,
  }
}

const addAge = (
  lifeInsurance: LifeInsuranceState,
  age: LifeInsuranceState['age']
): AddAgeAction => {
  const newLifeInsurance = { ...lifeInsurance, age }

  return {
    type: ADD_AGE,
    payload: newLifeInsurance,
  }
}

const addStep = (lifeInsurance: LifeInsuranceState): AddStepAction => {
  const newLifeInsurance = { ...lifeInsurance, step: lifeInsurance.step + 1 }

  return {
    type: ADD_STEP,
    payload: newLifeInsurance,
  }
}

const resetForm = (): ResetFormAction => {
  return {
    type: RESET_FORM,
  }
}

export { addName, addSurname, addEmail, addAge, addStep, resetForm }
