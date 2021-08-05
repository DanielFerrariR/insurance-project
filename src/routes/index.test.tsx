import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Routes from '.'

test('renders learn react link', () => {
  render(<Routes />)
  const linkElement = screen.getByText(/Get started/i)
  expect(linkElement).toBeInTheDocument()
})
