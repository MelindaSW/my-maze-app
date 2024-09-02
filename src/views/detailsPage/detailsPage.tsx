import './detailsPage.css'
import { useEffect, useState } from 'react'
import SearchHeader from '../../components/searchHeader/searchHeader'
import { IShowDetail } from '../../types/showTypes'
import { Link, redirect, useLoaderData } from 'react-router-dom'
import CastCard from '../../components/castCard/castCard'
import StarRating from '../../components/starRating/starRating'

const DetailsPage = () => {
  const [showDetails, setShowDetails] = useState<IShowDetail>()
  const loaderData = useLoaderData()

  useEffect(() => {
    if (loaderData !== null) {
      setShowDetails(loaderData as IShowDetail)
    }
  }, [setShowDetails, loaderData])

  const handleOnSubmit = (searchValue: string) => {
    localStorage.setItem('currentSearchQuery', searchValue)
    redirect('/')
  }

  return (
    <div className='detailsPage'>
      <SearchHeader onSubmit={(input) => handleOnSubmit(input)} />
      <Link to='/' className='backToSearchLink'>
        <span className='leftArrow'> &#8592;</span> Back to search results
      </Link>
      {showDetails && (
        <main className='showDetailsContainer'>
          <img
            src={showDetails.imageUrl.medium}
            alt='Show poster'
            className='showPoster'
          />
          <article>
            <h1>{showDetails.name}</h1>
            <StarRating maxRating={10} rating={showDetails.averageRating} />
            <h3>
              Genres: <span>{showDetails.genres.join(' | ')}</span>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
            <h2>Cast</h2>
            <div className='castCardContainer'>
              {showDetails.cast.map((castMember, index) => (
                <CastCard
                  key={index}
                  name={castMember.name}
                  characterName={castMember.characterName}
                  imageUrl={castMember.imageUrl?.medium}
                />
              ))}
            </div>
          </article>
        </main>
      )}
    </div>
  )
}

export default DetailsPage
