/* eslint-disable react-hooks/exhaustive-deps */
import './searchResultPage.css'
import { IShow } from '../../types/showTypes'
import { useEffect } from 'react'
import { useSearchAllShows } from '../../hooks/useSearchAllShows'
import ShowCard from '../../components/showCard/showCard'
import SearchHeader from '../../components/searchHeader/searchHeader'
import SearchInput from '../../components/searchInput/searchInput'
import MazeLogo from '../../assets/mazeLogo'

const SearchResultPage = () => {
  const { searchResult, errorMessage, handleSearch } = useSearchAllShows()

  useEffect(() => {
    const storedSearchValue = localStorage.getItem('currentSearchQuery')
    if (storedSearchValue !== null) {
      handleSearch(storedSearchValue)
    }
  }, [])

  return (
    <>
      {searchResult.length === 0 ? (
        <main className='firstSearchView'>
          <header>
            <MazeLogo />
            <SearchInput onSubmit={(input) => handleSearch(input)} />
            <span
              className={
                errorMessage.length > 0 ? 'errorMessage' : 'errorMessageHidden'
              }
            >
              {errorMessage}
            </span>
          </header>
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
