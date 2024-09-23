import './showCard.css';
import { IImageUrl } from '../../types/showTypes';
import StarRating from '../starRating/starRating';
import NoImage from '../../assets/no-image.png';

import { Link } from 'react-router-dom';

interface IShowCardProps {
  imageUrl: IImageUrl;
  rating: number | null;
  maxRating: number;
  title: string;
  id: number;
}

const ShowCard = ({
  imageUrl,
  rating,
  maxRating,
  title,
  id
}: IShowCardProps) => {
  return (
    <Link to={`/details/${id}`} className='posterLink'>
      <article className='showCard'>
        <img
          className='tvShowPoster'
          src={
            imageUrl !== null && imageUrl !== undefined
              ? imageUrl.original
              : NoImage
          }
          alt='Tv-show poster'
        />
        <div>
          <h3 className='title'>{title}</h3>
          <StarRating maxRating={maxRating} rating={rating} />
        </div>
      </article>
    </Link>
  );
};

export default ShowCard;
