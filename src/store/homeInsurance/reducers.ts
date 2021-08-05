import {
  HomeInsuranceState,
  UPDATE_HOME_INSURANCE_FORM,
  RESET_HOME_INSURANCE_FORM,
  HomeInsuranceActionTypes,
} from './types'

const initialState: HomeInsuranceState = {
  name: '',
  surname: '',
  email: '',
  age: 0,
  step: 0,
}

const homeInsuranceReducer = (
  state: HomeInsuranceState = initialState,
  action: HomeInsuranceActionTypes
): HomeInsuranceState => {
  switch (action.type) {
    case UPDATE_HOME_INSURANCE_FORM:
      return action.payload
    case RESET_HOME_INSURANCE_FORM:
      return initialState
    default:
      return state
  }
}

export default homeInsuranceReducer
