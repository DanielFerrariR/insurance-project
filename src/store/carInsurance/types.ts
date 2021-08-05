export type CarInsuranceState = {
  name: string
  surname: string
  email: string
  age: number
  step: number
}

export const ADD_NAME = 'ADD_NAME'

export const ADD_SURNAME = 'ADD_SURNAME'

export const ADD_EMAIL = 'ADD_EMAIL'

export const ADD_AGE = 'ADD_AGE'

export const ADD_STEP = 'ADD_STEP'

export const RESET_FORM = 'RESET_FORM'

export interface AddNameAction {
  type: typeof ADD_NAME
  payload: CarInsuranceState
}

export interface AddSurnameAction {
  type: typeof ADD_SURNAME
  payload: CarInsuranceState
}

export interface AddEmailAction {
  type: typeof ADD_EMAIL
  payload: CarInsuranceState
}

export interface AddAgeAction {
  type: typeof ADD_AGE
  payload: CarInsuranceState
}

export interface AddStepAction {
  type: typeof ADD_STEP
  payload: CarInsuranceState
}

export interface ResetFormAction {
  type: typeof RESET_FORM
}

export type CarInsuranceActionTypes =
  | AddNameAction
  | AddSurnameAction
  | AddEmailAction
  | AddAgeAction
  | AddStepAction
  | ResetFormAction
