import {
  CarInsuranceState,
  UPDATE_CAR_INSURANCE_FORM,
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

const carInsuranceReducer = (
  state: CarInsuranceState = initialState,
  action: CarInsuranceActionTypes
): CarInsuranceState => {
  switch (action.type) {
    case UPDATE_CAR_INSURANCE_FORM:
      return action.payload
    case RESET_CAR_INSURANCE_FORM:
      return initialState
    default:
      return state
  }
}

export default carInsuranceReducer
