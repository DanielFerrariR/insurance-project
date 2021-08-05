import {
  CarInsuranceState,
  UPDATE_CAR_INSURANCE_FORM,
  RESET_CAR_INSURANCE_FORM,
  updateCarInsuranceFormAction,
  ResetCarInsuranceFormAction,
} from './types'

const updateCarInsuranceForm = (
  carInsurance: CarInsuranceState
): updateCarInsuranceFormAction => {
  return {
    type: UPDATE_CAR_INSURANCE_FORM,
    payload: carInsurance,
  }
}

const resetCarInsuranceForm = (): ResetCarInsuranceFormAction => {
  return {
    type: RESET_CAR_INSURANCE_FORM,
  }
}

export { updateCarInsuranceForm, resetCarInsuranceForm }
