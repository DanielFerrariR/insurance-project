import * as React from 'react'

interface InsuranceState {
  age: number
  step: number
}

interface AgeStepProps {
  insurance: InsuranceState
  updateForm: (form: InsuranceState) => void
}

const AgeStep: React.FC<AgeStepProps> = ({ insurance, updateForm }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    updateForm({ ...insurance, step: insurance.step + 1 })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={(event) =>
            updateForm({ ...insurance, age: Number(event.target.value) })
          }
          min={0}
          value={insurance.age}
        />
      </div>
      <button type="submit" disabled={!insurance.age}>
        Next
      </button>
    </form>
  )
}

export default AgeStep
