import * as React from 'react'
import { useSelector, useDispatch } from '../../store'
import { useParams } from 'react-router-dom'
import { insurances } from '../../definitions/insurances'
import { routes } from '../../constants'
import { RootState } from '../../store'

type ValueOf<T> = T[keyof T]

type FormState = Exclude<Partial<ValueOf<RootState>>, undefined>

interface CommonInsuranceParameters {
  routeName: keyof typeof routes
}

const CommonInsurance: React.FC = () => {
  const { routeName } = useParams<CommonInsuranceParameters>()
  const insurance = useSelector((state) => state[routeName])
  const dispatch = useDispatch()
  const insuranceDefinition = insurances[routeName]
  const Component = insuranceDefinition?.steps[insurance.step]

  const updatedForm = (form: FormState) =>
    dispatch(insuranceDefinition?.updateForm({ ...insurance, ...form }))

  const resetForm = () => dispatch(insuranceDefinition?.resetForm())

  if (!Component) {
    return <div>There is no insurance for the provided route</div>
  }

  return (
    <>
      <h4>Buying {insuranceDefinition.name}</h4>
      <h5>{insuranceDefinition.description}</h5>
      <Component
        insurance={insurance}
        updateForm={updatedForm}
        resetForm={resetForm}
      />
    </>
  )
}

export default CommonInsurance
