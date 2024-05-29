import styled from "styled-components";

interface Props {
  id: number;
  name: string;
  genera: string;
}

const PokemonName = ({ id, name, genera }: Props) => {
  return (
    <PokemonNameStyle>
      <h1 className="poke-id">{id} 번 포켓몬</h1>
      <h1>{name}</h1>
      <h1 className="poke-genera">- {genera} -</h1>
    </PokemonNameStyle>
  );
};

const PokemonNameStyle = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin: 5px;
  }
  .poke-id {
    font-size: 1.5rem;
    color: #000;
  }
  .poke-genera {
    color: #000;
    font-size: 1.2rem;
  }
`;

export default PokemonName;
