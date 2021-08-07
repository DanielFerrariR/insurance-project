import * as React from 'react'
import { useSelector, useDispatch } from '../../store'
import { useParams } from 'react-router-dom'
import { insurances } from '../../definitions/insurances'
import { RootState } from '../../store'
import { InsurancesKeys, INSURANCES_ROUTES } from '../../constants'

type FormState = Partial<ValueOf<Pick<RootState, InsurancesKeys>>>

interface CommonInsuranceParameters {
  routeName: string
}

const CommonInsurance: React.FC = () => {
  const { routeName } = useParams<CommonInsuranceParameters>()
  const insurance = useSelector((state) => state[INSURANCES_ROUTES[routeName]])
  const dispatch = useDispatch()
  const insuranceDefinition = insurances[INSURANCES_ROUTES[routeName]]
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
