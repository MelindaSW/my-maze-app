import './starRating.css'

interface IStarRatingProps {
  maxRating: number
  rating: number | null
}

const StarRating = (props: IStarRatingProps) => {
  const filledStarsAmount = props.rating !== null ? Math.round(props.rating) : 0
  const emptyStarsAmount = props.maxRating - filledStarsAmount
  return (
    <>
      {props.rating && (
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
      {props.rating === null && (
        <div className='noRating'>
          <span>&#9734;</span> Not yet rated
        </div>
      )}
    </>
  )
}

export default StarRating
