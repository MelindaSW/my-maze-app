import './showCard.css'
import { IImageUrl } from '../../types/showTypes'
import StarRating from '../starRating/starRating'
import NoImageIcon from '../../assets/noImageIcon'
import { Link } from 'react-router-dom'

interface IShowCardProps {
  imageUrl: IImageUrl
  rating: number | null
  maxRating: number
  title: string
  id: number
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
        {imageUrl !== null ? (
          <img
            className='tvShowPoster'
            src={imageUrl.original}
            alt='Tv-show poster'
          />
        ) : (
          <div className='noPosterState'>
            <NoImageIcon />
          </div>
        )}
        <div>
          <h3 className='title'>{title}</h3>
          <StarRating maxRating={maxRating} rating={rating} />
        </div>
      </article>
    </Link>
  )
}

export default ShowCard
