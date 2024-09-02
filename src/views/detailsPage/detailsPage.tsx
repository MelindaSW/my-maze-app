import './detailsPage.css'
import { useState } from 'react'
import SearchHeader from '../../components/searchHeader/searchHeader'
import { IShowDetail } from '../../types/showTypes'
import { Link } from 'react-router-dom'

const DetailsPage = () => {
  const [showDetails, setShowDetails] = useState<IShowDetail>()

  const handleOnSubmit = (searchValue: string) => {}

  return (
    <div className='detailsPage'>
      <SearchHeader onSubmit={(input) => handleOnSubmit(input)} />
      <Link to='/search'>
        <nav className='backToSearchResultsNav'>
          <span className='leftArrow'> &#8592;</span> Back to search results
        </nav>
      </Link>
      {showDetails && (
        <main>
          <img src={showDetails.imageUrl.original} alt='Show poster' />
          <article>
            <h2>{showDetails.name}</h2>
            <h3>
              Genres: <span>{showDetails.genres.join(' | ')}</span>
            </h3>
            <p>{showDetails.summary}</p>
          </article>
        </main>
      )}
    </div>
  )
}

export default DetailsPage
