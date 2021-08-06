import {
  AgeStep,
  EmailStep,
  SummaryStep,
  NameStep,
} from '../../../components/organisms'
import {
  updateCarInsuranceForm,
  resetCarInsuranceForm,
} from '../../../store/carInsurance'

const carInsurance = {
  name: 'Car Insurance',
  description: 'An insurance for you car',
  steps: [NameStep, EmailStep, AgeStep, SummaryStep],
  updateForm: updateCarInsuranceForm,
  resetForm: resetCarInsuranceForm,
}

export default carInsurance
