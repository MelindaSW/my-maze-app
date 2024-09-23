import './castCard.css';
import NoImage from '../../assets/no-image.png';

interface ICastCardProps {
  name: string;
  characterName: string;
  imageUrl?: string | null;
}

const CastCard = ({ name, characterName, imageUrl }: ICastCardProps) => {
  return (
    <article className='castCard'>
      <img
        src={imageUrl !== null && imageUrl !== undefined ? imageUrl : NoImage}
      />
      <div>
        <h3>{name}</h3>
        <p>as {characterName}</p>
      </div>
    </article>
  );
};

export default CastCard;
