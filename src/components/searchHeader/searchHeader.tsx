import './searchHeader.css'
import MazeLogo from '../../assets/mazeLogo'
import SearchInput from '../searchInput/searchInput'

interface ISearchHeaderProps {
  onSubmit: (input: string) => void
}

const SearchHeader = ({ onSubmit }: ISearchHeaderProps) => {
  return (
    <header>
      <MazeLogo />
      <SearchInput onSubmit={(input) => onSubmit(input)} />
    </header>
  )
}

export default SearchHeader
