import { useLocation } from 'react-router-dom'
import ShowCard from '../../components/showCard/showCard'
import { IShow } from '../../types/showTypes'
import './searchResultPage.css'
import MazeLogo from '../../components/mazeLogo'
import SearchInput from '../../components/searchInput/searchInput'

const SearchResultPage = () => {
  const { state } = useLocation()
  return (
    <div className='pageContainer'>
      <header>
        <MazeLogo />
        <SearchInput onSubmit={function (input: string): void {}} />
      </header>
      <main>
        <div className='searchResultsContainer'>
          {state.map((show: IShow) => {
            return (
              <ShowCard
                maxRating={10}
                rating={show.averageRating}
                imageUrl={show.imageUrl}
                title={show.name}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default SearchResultPage
