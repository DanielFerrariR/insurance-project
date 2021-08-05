export type CarInsuranceState = {
  name: string
  surname: string
  email: string
  age: number
  step: number
}

export const ADD_CAR_INSURANCE_NAME = 'ADD_CAR_INSURANCE_NAME'

export const ADD_CAR_INSURANCE_SURNAME = 'ADD_CAR_INSURANCE_SURNAME'

export const ADD_CAR_INSURANCE_EMAIL = 'ADD_CAR_INSURANCE_EMAIL'

export const ADD_CAR_INSURANCE_AGE = 'ADD_CAR_INSURANCE_AGE'

export const ADD_CAR_INSURANCE_STEP = 'ADD_CAR_INSURANCE_STEP'

export const RESET_CAR_INSURANCE_FORM = 'RESET_CAR_INSURANCE_FORM'

export interface AddCarInsuranceNameAction {
  type: typeof ADD_CAR_INSURANCE_NAME
  payload: CarInsuranceState
}

export interface AddCarInsuranceSurnameAction {
  type: typeof ADD_CAR_INSURANCE_SURNAME
  payload: CarInsuranceState
}

export interface AddCarInsuranceEmailAction {
  type: typeof ADD_CAR_INSURANCE_EMAIL
  payload: CarInsuranceState
}

export interface AddCarInsuranceAgeAction {
  type: typeof ADD_CAR_INSURANCE_AGE
  payload: CarInsuranceState
}

export interface AddCarInsuranceStepAction {
  type: typeof ADD_CAR_INSURANCE_STEP
  payload: CarInsuranceState
}

export interface ResetCarInsuranceFormAction {
  type: typeof RESET_CAR_INSURANCE_FORM
}

export type CarInsuranceActionTypes =
  | AddCarInsuranceNameAction
  | AddCarInsuranceSurnameAction
  | AddCarInsuranceEmailAction
  | AddCarInsuranceAgeAction
  | AddCarInsuranceStepAction
  | ResetCarInsuranceFormAction
