import './detailsPage.css';
import { useEffect, useState } from 'react';
import SearchHeader from '../../components/searchHeader/searchHeader';
import { IShowDetail } from '../../types/showTypes';
import { Link, redirect, useLoaderData } from 'react-router-dom';
import CastCard from '../../components/castCard/castCard';
import StarRating from '../../components/starRating/starRating';
import NoImage from '../../assets/no-image.png';

const DetailsPage = () => {
  const [showDetails, setShowDetails] = useState<IShowDetail>();
  const loaderData = useLoaderData() as IShowDetail;

  useEffect(() => {
    if (loaderData !== null) {
      setShowDetails(loaderData);
    }
  }, [setShowDetails, loaderData]);

  const handleOnSubmit = (searchValue: string) => {
    localStorage.setItem('currentSearchQuery', searchValue);
    redirect('/');
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
              Genres: <span>{showDetails.genres.join(' | ')}</span>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
            <h2>Cast</h2>
            <div className='castCardContainer'>
              {showDetails.cast.length > 0
                ? showDetails.cast.map((castMember, index) => (
                    <CastCard
                      key={index}
                      name={castMember.name}
                      characterName={castMember.characterName}
                      imageUrl={
                        castMember.imageUrl ? castMember.imageUrl?.medium : null
                      }
                    />
                  ))
                : '(No cast information available)'}
            </div>
          </article>
        </main>
      )}
    </div>
  );
};

export default DetailsPage;
