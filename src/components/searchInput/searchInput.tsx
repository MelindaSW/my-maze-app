import { useState } from 'react'
import './searchInput.css'

interface ISearchInputProps {
  onSubmit: (input: string) => void
}

const SearchInput = ({ onSubmit }: ISearchInputProps) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onSubmit(searchValue)
    setSearchValue('')
  }

  return (
    <form id='search-series-form'>
      <input
        type='text'
        placeholder='Search for TV shows'
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
      />
      <button
        type='submit'
        disabled={searchValue.length === 0}
        onClick={(event) => handleSubmit(event)}
      >
        Search
      </button>
    </form>
  )
}

export default SearchInput
