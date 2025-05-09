import { render, screen } from '@testing-library/react'
import DisplayUsers from './_components/DisplayUsers'
import { useQuery } from '@tanstack/react-query'

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}))

describe('DataAPI Page (DisplayUsers component)', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('display the success ui', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: false,
    })
    render(<DisplayUsers />)
    expect(screen.getByTestId('data-api-display')).toBeInTheDocument()
  })

  it('display the loading ui', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    })
    render(<DisplayUsers />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('display the error ui', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    })
    render(<DisplayUsers />)
    expect(screen.getByText('Error fetching data')).toBeInTheDocument()
  })
})
