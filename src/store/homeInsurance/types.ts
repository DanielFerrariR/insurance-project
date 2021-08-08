export type HomeInsuranceState = {
  name?: string
  surname?: string
  email?: string
  age?: number
  step: number
}

export const UPDATE_HOME_INSURANCE_FORM = 'UPDATE_HOME_INSURANCE_FORM'

export const RESET_HOME_INSURANCE_FORM = 'RESET_HOME_INSURANCE_FORM'

export interface updateHomeInsuranceFormAction {
  type: typeof UPDATE_HOME_INSURANCE_FORM
  payload: HomeInsuranceState
}

export interface ResetHomeInsuranceFormAction {
  type: typeof RESET_HOME_INSURANCE_FORM
}

export type HomeInsuranceActionTypes =
  | updateHomeInsuranceFormAction
  | ResetHomeInsuranceFormAction
