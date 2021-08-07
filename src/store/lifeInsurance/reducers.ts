import {
  LifeInsuranceState,
  UPDATE_LIFE_INSURANCE_FORM,
  RESET_LIFE_INSURANCE_FORM,
  LifeInsuranceActionTypes
} from './types'

const initialState: LifeInsuranceState = {
  name: '',
  surname: '',
  email: '',
  age: 0,
  step: 0
}

const lifeInsuranceReducer = (
  state: LifeInsuranceState = initialState,
  action: LifeInsuranceActionTypes
): LifeInsuranceState => {
  switch (action.type) {
    case UPDATE_LIFE_INSURANCE_FORM:
      return action.payload
    case RESET_LIFE_INSURANCE_FORM:
      return initialState
    default:
      return state
  }
}

export default lifeInsuranceReducer
