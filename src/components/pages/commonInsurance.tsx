import * as React from 'react'
import { useSelector, useDispatch, RootState } from 'src/store'
import { useParams } from 'react-router-dom'
import { insurances } from 'src/definitions/insurances'
import { InsurancesKeys, INSURANCES_ROUTES } from 'src/constants'

type FormState = ValueOf<Pick<RootState, InsurancesKeys>>

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
        form={insurance}
        updateForm={updatedForm}
        resetForm={resetForm}
      />
    </>
  )
}

export default CommonInsurance
