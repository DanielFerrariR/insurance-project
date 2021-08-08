import * as React from 'react'
import { Link } from 'react-router-dom'
import { capitalize } from 'src/utils'

interface FormState {
  [key: string]: string | number
  step: number
}

interface SummaryStepProps {
  form: FormState
  resetForm: () => void
}

const SummaryStep: React.FC<SummaryStepProps> = ({ form, resetForm }) => (
  <>
    {Object.entries(form).map(([key, value]) => {
      if (key === 'step') return null
      return (
        <div key={key}>
          {capitalize(key)}: {value}
        </div>
      )
    })}
    <div>
      <Link to="/" onClick={() => resetForm()}>
        Purchase
      </Link>
    </div>
  </>
)

export default SummaryStep
