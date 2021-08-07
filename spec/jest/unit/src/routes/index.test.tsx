import * as React from 'react'
import { render, screen } from 'spec/jest/config/testUtils'
import Routes from 'src/routes'

describe('testing Routes', () => {
  test('renders Routes component', () => {
    render(<Routes />)
    const linkElement = screen.getByText(/Get started/i)
    expect(linkElement).toBeInTheDocument()
  })
})
