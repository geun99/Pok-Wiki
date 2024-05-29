import styled from "styled-components";
import NextButton from "./Button/NextButton";
import PrevButton from "./Button/PrevButton";
interface Props {
  id: string;
  navigate: (id: string) => void;
  prevPokemon?: string;
  nextPokemon?: string;
}

const PageMoveButtons = ({ id, navigate, prevPokemon, nextPokemon }: Props) => {
  const prevId = parseInt(id) - 1;
  const nextId = parseInt(id) + 1;
  return (
    <PageMoveButtonsStyle>
      <NextButton
        navigate={navigate}
        nextId={nextId}
        nextPokemon={nextPokemon}
      />
      <PrevButton
        navigate={navigate}
        prevId={prevId}
        prevPokemon={prevPokemon}
      />
    </PageMoveButtonsStyle>
  );
};

const PageMoveButtonsStyle = styled.div`
  .btn {
    color: #eee;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .left-btn {
    position: absolute;
    left: 10px;
    top: 50%;
  }
  .right-btn {
    position: absolute;
    right: 10px;
    top: 50%;
  }
  .info {
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
  }
  @media screen and (max-width: 768px) {
    .info {
      display: none;
    }
    .right-btn {
      width: 50px;
      position: absolute;
      right: 15px;
      color: #000;
    }
    .left-btn {
      width: 50px;
      position: absolute;
      left: 5px;
      color: #000;
    }
  }
`;

export default PageMoveButtons;
