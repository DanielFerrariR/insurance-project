export type LifeInsuranceState = {
  name?: string
  surname?: string
  email?: string
  age?: number
  step: number
}

export const UPDATE_LIFE_INSURANCE_FORM = 'UPDATE_LIFE_INSURANCE_FORM'

export const RESET_LIFE_INSURANCE_FORM = 'RESET_LIFE_INSURANCE_FORM'

export interface updateLifeInsuranceFormAction {
  type: typeof UPDATE_LIFE_INSURANCE_FORM
  payload: LifeInsuranceState
}

export interface ResetLifeInsuranceFormAction {
  type: typeof RESET_LIFE_INSURANCE_FORM
}

export type LifeInsuranceActionTypes =
  | updateLifeInsuranceFormAction
  | ResetLifeInsuranceFormAction
