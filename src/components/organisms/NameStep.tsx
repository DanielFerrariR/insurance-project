import * as React from 'react'

interface InsuranceState {
  name: string
  surname: string
  step: number
}

interface NameStepProps {
  insurance: InsuranceState
  updateForm: (form: InsuranceState) => void
}

const NameStep: React.FC<NameStepProps> = ({ insurance, updateForm }) => {
  return (
    <>
      <div>
        <label htmlFor="name-step-name">Name</label> :{' '}
        <input
          id="name-step-name"
          placeholder={`Type your name`}
          onChange={(event) =>
            updateForm({ ...insurance, name: event.target.value })
          }
          value={insurance.name}
        />
        <br />
        <label htmlFor="name-step-surname">Surname</label> :{' '}
        <input
          id="name-step-surname"
          placeholder={`Type your surname`}
          onChange={(event) =>
            updateForm({ ...insurance, surname: event.target.value })
          }
          value={insurance.surname}
        />
      </div>
      <button
        disabled={insurance.name.length === 0 || insurance.surname.length === 0}
        onClick={() => updateForm({ ...insurance, step: insurance.step + 1 })}
      >
        Next
      </button>
    </>
  )
}

export default NameStep
