import {
  HomeInsuranceState,
  ADD_HOME_INSURANCE_NAME,
  ADD_HOME_INSURANCE_SURNAME,
  ADD_HOME_INSURANCE_EMAIL,
  ADD_HOME_INSURANCE_AGE,
  ADD_HOME_INSURANCE_STEP,
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

const placesReducer = (
  state: HomeInsuranceState = initialState,
  action: HomeInsuranceActionTypes
): HomeInsuranceState => {
  switch (action.type) {
    case ADD_HOME_INSURANCE_NAME:
      return action.payload
    case ADD_HOME_INSURANCE_SURNAME:
      return action.payload
    case ADD_HOME_INSURANCE_EMAIL:
      return action.payload
    case ADD_HOME_INSURANCE_AGE:
      return action.payload
    case ADD_HOME_INSURANCE_STEP:
      return action.payload
    case RESET_HOME_INSURANCE_FORM:
      return initialState
    default:
      return state
  }
}

export default placesReducer
