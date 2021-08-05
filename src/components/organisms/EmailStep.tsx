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
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    updateForm({ ...insurance, step: insurance.step + 1 })
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit" disabled={!insurance.email}>
        Next
      </button>
    </form>
  )
}

export default EmailStep
