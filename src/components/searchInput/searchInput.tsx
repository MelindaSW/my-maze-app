import { useState } from 'react'
import './searchInput.css'

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('')

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log(event.currentTarget)
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Search for TV shows'
        onChange={(event) => setSearchValue(event.target.value)}
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
