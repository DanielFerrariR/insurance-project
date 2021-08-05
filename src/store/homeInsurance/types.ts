export type HomeInsuranceState = {
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
  payload: HomeInsuranceState
}

export interface AddSurnameAction {
  type: typeof ADD_SURNAME
  payload: HomeInsuranceState
}

export interface AddEmailAction {
  type: typeof ADD_EMAIL
  payload: HomeInsuranceState
}

export interface AddAgeAction {
  type: typeof ADD_AGE
  payload: HomeInsuranceState
}

export interface AddStepAction {
  type: typeof ADD_STEP
  payload: HomeInsuranceState
}

export interface ResetFormAction {
  type: typeof RESET_FORM
}

export type HomeInsuranceActionTypes =
  | AddNameAction
  | AddSurnameAction
  | AddEmailAction
  | AddAgeAction
  | AddStepAction
  | ResetFormAction
