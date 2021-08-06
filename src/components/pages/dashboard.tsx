import * as React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../constants'

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>Welcome to Getsafe's Developer Insurance</p>
      <Link to={`/buy/${routes.lifeInsurance}`}>Life Insurance</Link>
      <Link to={`/buy/${routes.carInsurance}`}>Car Insurance</Link>
      <Link to={`/buy/${routes.homeInsurance}`}>Home Insurance</Link>
    </div>
  )
}

export default Dashboard
