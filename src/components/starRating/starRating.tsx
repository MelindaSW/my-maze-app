import './starRating.css'

interface IStarRatingProps {
  maxRating: number
  rating: number | null
}

const StarRating = ({ maxRating, rating }: IStarRatingProps) => {
  const filledStarsAmount = rating !== null ? Math.round(rating) : 0
  const emptyStarsAmount = maxRating - filledStarsAmount
  return (
    <>
      {rating && (
        <div className='stars'>
          {Array.from({ length: filledStarsAmount }).map((_item, index) => (
            <span key={index}>&#9733;</span>
          ))}
          {Array.from({
            length: emptyStarsAmount
          }).map((_item, index) => (
            <span key={index}>&#9734;</span>
          ))}
        </div>
      )}
      {rating === null && (
        <div className='noRating'>
          <span>&#9734;</span> Not yet rated
        </div>
      )}
    </>
  )
}

export default StarRating
