import * as React from 'react'
import { Link } from 'react-router-dom'

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>Welcome to Getsafe's Developer Insurance</p>
      <Link to="/buy/life_insurance">Life Insurance</Link>
      <Link to="/buy/car_insurance">Car Insurance</Link>
      <Link to="/buy/home_insurance">Home Insurance</Link>
    </div>
  )
}

export default Dashboard
