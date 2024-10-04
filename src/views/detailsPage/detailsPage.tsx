import './detailsPage.css';
import { useEffect, useState } from 'react';
import SearchHeader from '../../components/searchHeader/searchHeader';
import { IShowDetail } from '../../types/showTypes';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import CastCard from '../../components/castCard/castCard';
import StarRating from '../../components/starRating/starRating';
import NoImage from '../../assets/no-image.png';

const DetailsPage = () => {
  const [showDetails, setShowDetails] = useState<IShowDetail>();
  const loaderData = useLoaderData() as IShowDetail;
  const navigate = useNavigate();

  useEffect(() => {
    if (loaderData !== null) {
      setShowDetails(loaderData);
    }
  }, [setShowDetails, loaderData]);

  const handleOnSubmit = (searchValue: string) => {
    localStorage.setItem('currentSearchQuery', searchValue);
    navigate('/');
  };

  return (
    <div className='detailsPage'>
      <SearchHeader onSubmit={(input) => handleOnSubmit(input)} />
      <Link to='/' className='backToSearchLink'>
        <span className='leftArrow'> &#8592;</span> Back to search results
      </Link>
      {showDetails && (
        <main className='showDetailsContainer'>
          <img
            src={
              showDetails.imageUrl !== null
                ? showDetails.imageUrl.medium
                : NoImage
            }
            alt='Show poster'
            className='showPoster'
          />
          <article className='showDetailsArticle'>
            <h1>{showDetails.name}</h1>
            <StarRating maxRating={10} rating={showDetails.averageRating} />
            <h3>
              Genres:{' '}
              {showDetails.genres.length > 0 ? (
                <span>{showDetails.genres.join(' | ')}</span>
              ) : (
                <span className='noInfoAvailable'>No genres available...</span>
              )}
            </h3>
            {showDetails.summary !== null ? (
              <div dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
            ) : (
              <span className='noInfoAvailable'>
                No description available...
              </span>
            )}
            <h2>Cast</h2>
            <div className='castCardContainer'>
              {showDetails.cast.length > 0 ? (
                showDetails.cast.map((castMember, index) => (
                  <CastCard
                    key={index}
                    name={castMember.name}
                    characterName={castMember.characterName}
                    imageUrl={
                      castMember.imageUrl ? castMember.imageUrl?.medium : null
                    }
                  />
                ))
              ) : (
                <span className='noInfoAvailable'>
                  No cast information available...
                </span>
              )}
            </div>
          </article>
        </main>
      )}
    </div>
  );
};

export default DetailsPage;
