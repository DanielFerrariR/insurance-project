import {
  HomeInsuranceState,
  UPDATE_HOME_INSURANCE_FORM,
  RESET_HOME_INSURANCE_FORM,
  updateHomeInsuranceFormAction,
  ResetHomeInsuranceFormAction,
} from './types'

const updateHomeInsuranceForm = (
  homeInsurance: HomeInsuranceState
): updateHomeInsuranceFormAction => {
  return {
    type: UPDATE_HOME_INSURANCE_FORM,
    payload: homeInsurance,
  }
}

const resetHomeInsuranceForm = (): ResetHomeInsuranceFormAction => {
  return {
    type: RESET_HOME_INSURANCE_FORM,
  }
}

export { updateHomeInsuranceForm, resetHomeInsuranceForm }
