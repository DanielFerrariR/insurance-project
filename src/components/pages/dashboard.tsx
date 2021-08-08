import * as React from 'react'
import { Link } from 'react-router-dom'
import { INSURANCES_ROUTES } from 'src/constants'
import { insurances } from 'src/definitions/insurances'

const Dashboard: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <p>Welcome to Getsafe&apos;s Developer Insurance</p>
    {Object.entries(INSURANCES_ROUTES).map(([key, value]) => (
      <Link key={key} to={`/buy/${key}`}>
        {insurances[value].name}
      </Link>
    ))}
  </div>
)

export default Dashboard
