import {
  LifeInsuranceState,
  ADD_NAME,
  ADD_SURNAME,
  ADD_EMAIL,
  ADD_AGE,
  ADD_STEP,
  RESET_FORM,
  LifeInsuranceActionTypes,
} from './types'

const initialState: LifeInsuranceState = {
  name: '',
  surname: '',
  email: '',
  age: 0,
  step: 0,
}

const placesReducer = (
  state: LifeInsuranceState = initialState,
  action: LifeInsuranceActionTypes
): LifeInsuranceState => {
  switch (action.type) {
    case ADD_NAME:
      return action.payload
    case ADD_SURNAME:
      return action.payload
    case ADD_EMAIL:
      return action.payload
    case ADD_AGE:
      return action.payload
    case ADD_STEP:
      return action.payload
    case RESET_FORM:
      return initialState
    default:
      return state
  }
}

export default placesReducer
