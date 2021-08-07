export type CarInsuranceState = {
  name?: string
  surname?: string
  email?: string
  step: number
}

export const UPDATE_CAR_INSURANCE_FORM = 'UPDATE_CAR_INSURANCE_FORM'

export const RESET_CAR_INSURANCE_FORM = 'RESET_CAR_INSURANCE_FORM'

export interface updateCarInsuranceFormAction {
  type: typeof UPDATE_CAR_INSURANCE_FORM
  payload: CarInsuranceState
}

export interface ResetCarInsuranceFormAction {
  type: typeof RESET_CAR_INSURANCE_FORM
}

export type CarInsuranceActionTypes =
  | updateCarInsuranceFormAction
  | ResetCarInsuranceFormAction
