import {
  LifeInsuranceState,
  UPDATE_LIFE_INSURANCE_FORM,
  RESET_LIFE_INSURANCE_FORM,
  updateLifeInsuranceFormAction,
  ResetLifeInsuranceFormAction,
} from './types'

const updateLifeInsuranceForm = (
  lifeInsurance: LifeInsuranceState
): updateLifeInsuranceFormAction => {
  return {
    type: UPDATE_LIFE_INSURANCE_FORM,
    payload: lifeInsurance,
  }
}

const resetLifeInsuranceForm = (): ResetLifeInsuranceFormAction => {
  return {
    type: RESET_LIFE_INSURANCE_FORM,
  }
}

export { updateLifeInsuranceForm, resetLifeInsuranceForm }
