import { EmailStep, SummaryStep, NameStep } from 'src/components/organisms'
import {
  updateCarInsuranceForm,
  resetCarInsuranceForm
} from 'src/store/carInsurance'

const carInsurance = {
  name: 'Car Insurance',
  description: 'An insurance for your car',
  steps: [NameStep, EmailStep, SummaryStep],
  updateForm: updateCarInsuranceForm,
  resetForm: resetCarInsuranceForm
}

export default carInsurance
