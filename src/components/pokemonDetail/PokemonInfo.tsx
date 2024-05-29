import styled from "styled-components";

interface PokemonInfoProps {
  flavorText: string;
  height: number;
  weight: number;
  genera: string;
}

const PokemonInfo = ({ flavorText, height, weight }: PokemonInfoProps) => {
  return (
    <PokemonInfoStyle>
      <p className="flavor">{flavorText}</p>
      <div className="height-weight">
        <p>신장 : {height / 10}m</p>
        <p>무게 : {weight / 10}kg</p>
      </div>
    </PokemonInfoStyle>
  );
};

const PokemonInfoStyle = styled.div`
  .flavor {
    font-size: 1.2rem;
    margin: 10px;
    height: 4rem;
    margin: 5px;
    margin-bottom: 20px;
  }
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  .height-weight {
    display: flex;
    justify-content: space-between;
    width: 100%;
    p {
      flex-basis: 50%;
      padding: 5px;
      border-radius: 100px;
      background-color: #bbb;
      text-align: center;
      margin: 5px;
      font-size: 1.2rem;
    }
    @media (max-width: 768px) {
      .height-weight {
        flex-direction: column;
        p {
          flex-basis: 100%;
        }
      }
    }
  }
`;

export default PokemonInfo;
