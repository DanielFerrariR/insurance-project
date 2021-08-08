import {
  AgeStep,
  EmailStep,
  SummaryStep,
  NameStep
} from 'src/components/organisms'
import {
  updateLifeInsuranceForm,
  resetLifeInsuranceForm
} from 'src/store/lifeInsurance'

const lifeInsurance = {
  name: 'Life Insurance',
  description: 'An insurance for your life',
  steps: [NameStep, EmailStep, AgeStep, SummaryStep],
  updateForm: updateLifeInsuranceForm,
  resetForm: resetLifeInsuranceForm
}

export default lifeInsurance
