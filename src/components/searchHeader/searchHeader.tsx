import './searchHeader.css'
import MazeLogo from '../../assets/mazeLogo'
import SearchInput from '../searchInput/searchInput'

interface ISearchHeaderProps {
  onSubmit: (input: string) => void
}

const SearchHeader = ({ onSubmit }: ISearchHeaderProps) => {
  return (
    <header className='searchHeader'>
      <div className='logoContainer'>
        <MazeLogo />
      </div>
      <SearchInput onSubmit={(input) => onSubmit(input)} />
    </header>
  )
}

export default SearchHeader
