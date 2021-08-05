import { combineReducers, CombinedState } from 'redux'
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { lifeInsuranceReducer } from './lifeInsurance'
import { carInsuranceReducer } from './carInsurance'
import { homeInsuranceReducer } from './homeInsurance'

const appReducer = combineReducers({
  lifeInsurance: lifeInsuranceReducer,
  carInsurance: carInsuranceReducer,
  homeInsurance: homeInsuranceReducer,
})

export const rootReducer: typeof appReducer = (state, action) => {
  const newState = {
    ...state,
  } as CombinedState<RootState> | undefined

  return appReducer(newState, action)
}

type RootState = ReturnType<typeof appReducer>

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

type ExtractedActions = typeof appReducer extends (
  state: CombinedState<RootState>,
  action: infer T
) => RootState
  ? T
  : never

type ActionTypes = ExtractedActions

type RootDispatch = <T extends ActionTypes>(action: T) => T

export const useDispatch = (): RootDispatch => useReduxDispatch()
