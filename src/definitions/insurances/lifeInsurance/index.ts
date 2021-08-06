import {
  AgeStep,
  EmailStep,
  SummaryStep,
  NameStep,
} from '../../../components/organisms'
import {
  updateLifeInsuranceForm,
  resetLifeInsuranceForm,
} from '../../../store/lifeInsurance'

const lifeInsurance = {
  name: 'Life Insurance',
  description: 'An insurance for your life',
  steps: [NameStep, EmailStep, AgeStep, SummaryStep],
  updateForm: updateLifeInsuranceForm,
  resetForm: resetLifeInsuranceForm,
}

export default lifeInsurance
