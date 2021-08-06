import {
  AgeStep,
  EmailStep,
  SummaryStep,
  NameStep,
} from '../../../components/organisms'
import {
  updateHomeInsuranceForm,
  resetHomeInsuranceForm,
} from '../../../store/homeInsurance'

const homeInsurance = {
  name: 'Home Insurance',
  description: 'An insurance for you home',
  steps: [NameStep, EmailStep, AgeStep, SummaryStep],
  updateForm: updateHomeInsuranceForm,
  resetForm: resetHomeInsuranceForm,
}

export default homeInsurance
