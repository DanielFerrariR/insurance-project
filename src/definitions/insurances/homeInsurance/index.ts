import {
  AgeStep,
  EmailStep,
  SummaryStep,
  NameStep
} from 'src/components/organisms'
import {
  updateHomeInsuranceForm,
  resetHomeInsuranceForm
} from 'src/store/homeInsurance'

const homeInsurance = {
  name: 'Home Insurance',
  description: 'An insurance for your home',
  steps: [NameStep, EmailStep, AgeStep, SummaryStep],
  updateForm: updateHomeInsuranceForm,
  resetForm: resetHomeInsuranceForm
}

export default homeInsurance
