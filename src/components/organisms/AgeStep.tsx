import * as React from 'react'
import { ensure } from 'src/utils'

interface FormState {
  age?: number
  step: number
}

interface AgeStepProps {
  form: FormState
  updateForm: (form: FormState) => void
}

const AgeStep: React.FC<AgeStepProps> = ({ form, updateForm }) => {
  const [age] = ensure(form.age)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    updateForm({ ...form, step: form.step + 1 })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="age-step-age">
          Age:{' '}
          <input
            type="number"
            onChange={(event) =>
              updateForm({ ...form, age: Number(event.target.value) })
            }
            min={0}
            value={age}
          />
        </label>
      </div>
      <button type="submit" disabled={!age}>
        Next
      </button>
    </form>
  )
}

export default AgeStep
