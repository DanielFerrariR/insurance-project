import { RootStateKeys } from 'src/store'

export type InsurancesKeys = PickKeyEndWith<RootStateKeys, 'Insurance'>

interface InsurancesRoutes {
  [route: string]: InsurancesKeys
}

const INSURANCES_ROUTES: InsurancesRoutes = {
  'life-insurance': 'lifeInsurance',
  'home-insurance': 'homeInsurance',
  'car-insurance': 'carInsurance'
}

export default INSURANCES_ROUTES
