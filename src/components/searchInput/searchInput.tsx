import { useState } from 'react'
import './searchInput.css'

interface ISearchInputProps {
  onSubmit: (input: string) => void
}

const SearchInput = (props: ISearchInputProps) => {
  const [searchValue, setSearchValue] = useState('')

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    props.onSubmit(searchValue)
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
        onClick={(event) => onSubmit(event)}
      >
        Search
      </button>
    </form>
  )
}

export default SearchInput
