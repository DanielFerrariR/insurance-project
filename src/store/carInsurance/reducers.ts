import {
  CarInsuranceState,
  ADD_CAR_INSURANCE_NAME,
  ADD_CAR_INSURANCE_SURNAME,
  ADD_CAR_INSURANCE_EMAIL,
  ADD_CAR_INSURANCE_AGE,
  ADD_CAR_INSURANCE_STEP,
  RESET_CAR_INSURANCE_FORM,
  CarInsuranceActionTypes,
} from './types'

const initialState: CarInsuranceState = {
  name: '',
  surname: '',
  email: '',
  age: 0,
  step: 0,
}

const placesReducer = (
  state: CarInsuranceState = initialState,
  action: CarInsuranceActionTypes
): CarInsuranceState => {
  switch (action.type) {
    case ADD_CAR_INSURANCE_NAME:
      return action.payload
    case ADD_CAR_INSURANCE_SURNAME:
      return action.payload
    case ADD_CAR_INSURANCE_EMAIL:
      return action.payload
    case ADD_CAR_INSURANCE_AGE:
      return action.payload
    case ADD_CAR_INSURANCE_STEP:
      return action.payload
    case RESET_CAR_INSURANCE_FORM:
      return initialState
    default:
      return state
  }
}

export default placesReducer
