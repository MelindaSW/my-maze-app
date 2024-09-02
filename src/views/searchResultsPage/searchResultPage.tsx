import './searchResultPage.css'
import { IShow } from '../../types/showTypes'
import { useEffect } from 'react'
import { useSearchAllShows } from '../../hooks/useSearchAllShows'
import ShowCard from '../../components/showCard/showCard'
import SearchHeader from '../../components/searchHeader/searchHeader'
import SearchInput from '../../components/searchInput/searchInput'
import MazeLogo from '../../components/mazeLogo'

const SearchResultPage = () => {
  const { searchResult, errorMessage, handleSearch } = useSearchAllShows()

  useEffect(() => {
    const previousSearch = localStorage.getItem('currentSearchQuery')
    if (previousSearch !== null) {
      handleSearch(previousSearch)
    }
  }, [])

  return (
    <>
      {searchResult.length === 0 ? (
        <main className='firstSearchView'>
          <MazeLogo />
          <SearchInput onSubmit={(searchValue) => searchValue} />
          <span
            className={
              errorMessage.length > 0 ? 'errorMessage' : 'errorMessageHidden'
            }
          >
            {errorMessage}
          </span>
        </main>
      ) : (
        <div className='searchPage'>
          <SearchHeader onSubmit={(input) => handleSearch(input)} />
          <main className='currentSearchView'>
            <div className='searchResultsContainer'>
              {searchResult.map((show: IShow, index) => {
                return (
                  <ShowCard
                    maxRating={10}
                    rating={show.averageRating}
                    imageUrl={show.imageUrl}
                    title={show.name}
                    id={show.id}
                    key={index}
                  />
                )
              })}
            </div>
          </main>
        </div>
      )}
    </>
  )
}

export default SearchResultPage
