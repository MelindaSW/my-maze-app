import './castCard.css'

interface ICastCardProps {
  name: string
  characterName: string
  imageUrl?: string
}

const CastCard = ({ name, characterName, imageUrl }: ICastCardProps) => {
  return (
    <article className='castCard'>
      <img src={imageUrl} />
      <div>
        <h3>{name}</h3>
        <p>as {characterName}</p>
      </div>
    </article>
  )
}

export default CastCard
