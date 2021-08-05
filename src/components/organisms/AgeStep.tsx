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
  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={(event) =>
            updateForm({ ...insurance, age: Number(event.target.value) })
          }
          value={insurance.age}
        />
      </div>
      <button
        disabled={insurance.age === 0}
        onClick={() => updateForm({ ...insurance, step: insurance.step + 1 })}
      >
        Next
      </button>
    </>
  )
}

export default AgeStep
