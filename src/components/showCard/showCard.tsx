import './showCard.css'
import { IImageUrl } from '../../types/showTypes'
import StarRating from '../starRating/starRating'

interface IShowCardProps {
  imageUrl: IImageUrl
  rating: number | null
  maxRating: number
  title: string
}

const ShowCard = (props: IShowCardProps) => {
  console.log({ props })
  return (
    <article className='showCard'>
      {props.imageUrl !== null ? (
        <img
          className='tvShowPoster'
          srcSet={`${props.imageUrl.medium} 280w ${props.imageUrl.original} 500w`}
          sizes='(max-width: 670px) 280px,
         500px'
          src={props.imageUrl.original}
          alt='Tv-show poster'
        />
      ) : (
        <div className='noPosterState'>N/A</div>
      )}
      <h3 className='title'>{props.title}</h3>
      <StarRating maxRating={props.maxRating} rating={props.rating} />
    </article>
  )
}

export default ShowCard
