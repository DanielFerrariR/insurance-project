import {
  LifeInsuranceState,
  ADD_LIFE_INSURANCE_NAME,
  ADD_LIFE_INSURANCE_SURNAME,
  ADD_LIFE_INSURANCE_EMAIL,
  ADD_LIFE_INSURANCE_AGE,
  ADD_LIFE_INSURANCE_STEP,
  RESET_LIFE_INSURANCE_FORM,
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
    case ADD_LIFE_INSURANCE_NAME:
      return action.payload
    case ADD_LIFE_INSURANCE_SURNAME:
      return action.payload
    case ADD_LIFE_INSURANCE_EMAIL:
      return action.payload
    case ADD_LIFE_INSURANCE_AGE:
      return action.payload
    case ADD_LIFE_INSURANCE_STEP:
      return action.payload
    case RESET_LIFE_INSURANCE_FORM:
      return initialState
    default:
      return state
  }
}

export default placesReducer
