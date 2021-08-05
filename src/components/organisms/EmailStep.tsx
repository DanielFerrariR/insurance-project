import * as React from 'react'

interface InsuranceState {
  email: string
  step: number
}

interface EmailStepProps {
  insurance: InsuranceState
  updateForm: (form: InsuranceState) => void
}

const EmailStep: React.FC<EmailStepProps> = ({ insurance, updateForm }) => {
  return (
    <>
      <div>
        <label htmlFor="email-step-email">Email:</label>{' '}
        <input
          id="email-step-email"
          type="email"
          onChange={(event) =>
            updateForm({ ...insurance, email: event.target.value })
          }
          value={insurance.email}
        />
      </div>
      <button
        disabled={insurance.email.length === 0}
        onClick={() => updateForm({ ...insurance, step: insurance.step + 1 })}
      >
        Next
      </button>
    </>
  )
}

export default EmailStep
