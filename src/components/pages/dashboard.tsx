import * as React from 'react'
import { Link } from 'react-router-dom'
import { insuranceRoutes } from '../../constants'

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>Welcome to Getsafe's Developer Insurance</p>
      <Link to={`/buy/${insuranceRoutes.lifeInsurance}`}>Life Insurance</Link>
      <Link to={`/buy/${insuranceRoutes.carInsurance}`}>Car Insurance</Link>
      <Link to={`/buy/${insuranceRoutes.homeInsurance}`}>Home Insurance</Link>
    </div>
  )
}

export default Dashboard
