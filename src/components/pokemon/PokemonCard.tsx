import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Types from "../Common/Types";

interface PokemonCardProps {
  name: string;
  types: string[];
  image: string;
  id: number;
}

const PokemonCard = ({ name, types, image, id }: PokemonCardProps) => {
  const navigate = useNavigate();
  return (
    <PokemonCardStyle>
      <div
        className="card"
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
      >
        <h2>
          {id}. {name}
        </h2>
        <LazyLoadImage src={image} alt={name} />
        <Types types={types} />
      </div>
    </PokemonCardStyle>
  );
};
const PokemonCardStyle = styled.div`
  .card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;
    padding: 10px;
    border: 1px solid #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    h2 {
      font-size: 1.5rem;
    }

    img {
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    gap: 10px;
    .card {
      padding: 5px;
      h2 {
        font-size: 1.25rem;
      }
    }
    .card img {
      width: 100%;
    }
  }
`;

export default PokemonCard;
