import * as React from 'react'
import { ensure } from 'src/utils'

interface FormState {
  name?: string
  surname?: string
  step: number
}

interface NameStepProps {
  form: FormState
  updateForm: (form: FormState) => void
}

const NameStep: React.FC<NameStepProps> = ({ form, updateForm }) => {
  const name = ensure(form.name)
  const surname = ensure(form.surname)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    updateForm({ ...form, step: form.step + 1 })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name-step-name">
          Name:{' '}
          <input
            id="name-step-name"
            placeholder="Type your name"
            onChange={(event) =>
              updateForm({ ...form, name: event.target.value })
            }
            value={name}
          />
        </label>
        <br />
        <label htmlFor="name-step-surname">
          Surname:{' '}
          <input
            id="name-step-surname"
            placeholder="Type your surname"
            onChange={(event) =>
              updateForm({ ...form, surname: event.target.value })
            }
            value={surname}
          />
        </label>
      </div>
      <button type="submit" disabled={!name || !surname}>
        Next
      </button>
    </form>
  )
}

export default NameStep
