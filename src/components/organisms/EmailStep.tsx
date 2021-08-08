import * as React from 'react'
import { ensure } from 'src/utils'

interface FormState {
  email?: string
  step: number
}

interface EmailStepProps {
  form: FormState
  updateForm: (form: FormState) => void
}

const EmailStep: React.FC<EmailStepProps> = ({ form, updateForm }) => {
  const [email] = ensure(form.email)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    updateForm({ ...form, step: form.step + 1 })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email-step-email">
          Email:{' '}
          <input
            id="email-step-email"
            type="email"
            onChange={(event) =>
              updateForm({ ...form, email: event.target.value })
            }
            value={email}
          />
        </label>
      </div>
      <button type="submit" disabled={!email}>
        Next
      </button>
    </form>
  )
}

export default EmailStep
