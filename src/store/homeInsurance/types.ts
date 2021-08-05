export type HomeInsuranceState = {
  name: string
  surname: string
  email: string
  age: number
  step: number
}

export const ADD_HOME_INSURANCE_NAME = 'ADD_HOME_INSURANCE_NAME'

export const ADD_HOME_INSURANCE_SURNAME = 'ADD_HOME_INSURANCE_SURNAME'

export const ADD_HOME_INSURANCE_EMAIL = 'ADD_HOME_INSURANCE_EMAIL'

export const ADD_HOME_INSURANCE_AGE = 'ADD_HOME_INSURANCE_AGE'

export const ADD_HOME_INSURANCE_STEP = 'ADD_HOME_INSURANCE_STEP'

export const RESET_HOME_INSURANCE_FORM = 'RESET_HOME_INSURANCE_FORM'

export interface AddHomeInsuranceNameAction {
  type: typeof ADD_HOME_INSURANCE_NAME
  payload: HomeInsuranceState
}

export interface AddHomeInsuranceSurnameAction {
  type: typeof ADD_HOME_INSURANCE_SURNAME
  payload: HomeInsuranceState
}

export interface AddHomeInsuranceEmailAction {
  type: typeof ADD_HOME_INSURANCE_EMAIL
  payload: HomeInsuranceState
}

export interface AddHomeInsuranceAgeAction {
  type: typeof ADD_HOME_INSURANCE_AGE
  payload: HomeInsuranceState
}

export interface AddHomeInsuranceStepAction {
  type: typeof ADD_HOME_INSURANCE_STEP
  payload: HomeInsuranceState
}

export interface ResetHomeInsuranceFormAction {
  type: typeof RESET_HOME_INSURANCE_FORM
}

export type HomeInsuranceActionTypes =
  | AddHomeInsuranceNameAction
  | AddHomeInsuranceSurnameAction
  | AddHomeInsuranceEmailAction
  | AddHomeInsuranceAgeAction
  | AddHomeInsuranceStepAction
  | ResetHomeInsuranceFormAction
