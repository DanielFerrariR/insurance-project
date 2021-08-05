export type LifeInsuranceState = {
  name: string
  surname: string
  email: string
  age: number
  step: number
}

export const ADD_LIFE_INSURANCE_NAME = 'ADD_LIFE_INSURANCE_NAME'

export const ADD_LIFE_INSURANCE_SURNAME = 'ADD_LIFE_INSURANCE_SURNAME'

export const ADD_LIFE_INSURANCE_EMAIL = 'ADD_LIFE_INSURANCE_EMAIL'

export const ADD_LIFE_INSURANCE_AGE = 'ADD_LIFE_INSURANCE_AGE'

export const ADD_LIFE_INSURANCE_STEP = 'ADD_LIFE_INSURANCE_STEP'

export const RESET_LIFE_INSURANCE_FORM = 'RESET_LIFE_INSURANCE_FORM'

export interface AddLifeInsuranceNameAction {
  type: typeof ADD_LIFE_INSURANCE_NAME
  payload: LifeInsuranceState
}

export interface AddLifeInsuranceSurnameAction {
  type: typeof ADD_LIFE_INSURANCE_SURNAME
  payload: LifeInsuranceState
}

export interface AddLifeInsuranceEmailAction {
  type: typeof ADD_LIFE_INSURANCE_EMAIL
  payload: LifeInsuranceState
}

export interface AddLifeInsuranceAgeAction {
  type: typeof ADD_LIFE_INSURANCE_AGE
  payload: LifeInsuranceState
}

export interface AddLifeInsuranceStepAction {
  type: typeof ADD_LIFE_INSURANCE_STEP
  payload: LifeInsuranceState
}

export interface ResetLifeInsuranceFormAction {
  type: typeof RESET_LIFE_INSURANCE_FORM
}

export type LifeInsuranceActionTypes =
  | AddLifeInsuranceNameAction
  | AddLifeInsuranceSurnameAction
  | AddLifeInsuranceEmailAction
  | AddLifeInsuranceAgeAction
  | AddLifeInsuranceStepAction
  | ResetLifeInsuranceFormAction
