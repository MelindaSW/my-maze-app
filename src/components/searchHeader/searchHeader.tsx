import MazeLogo from '../mazeLogo'
import SearchInput from '../searchInput/searchInput'
import './searchHeader.css'

interface ISearchHeaderProps {
  onSubmit: (input: string) => void
}

const SearchHeader = (props: ISearchHeaderProps) => {
  return (
    <header>
      <MazeLogo />
      <SearchInput onSubmit={(input) => props.onSubmit(input)} />
    </header>
  )
}

export default SearchHeader
