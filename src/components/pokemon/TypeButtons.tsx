import styled from "styled-components";

import bug from "../../assets/bug.svg";
import fire from "../../assets/fire.svg";
import flying from "../../assets/flying.svg";
import ghost from "../../assets/ghost.svg";
import grass from "../../assets/grass.svg";
import ground from "../../assets/ground.svg";
import ice from "../../assets/ice.svg";
import normal from "../../assets/normal.svg";
import poison from "../../assets/poison.svg";
import psychic from "../../assets/psychic.svg";
import rock from "../../assets/rock.svg";
import steel from "../../assets/steel.svg";
import water from "../../assets/water.svg";
import dark from "../../assets/dark.svg";
import fairy from "../../assets/fairy.svg";
import dragon from "../../assets/dragon.svg";
import electric from "../../assets/electric.svg";
import fighting from "../../assets/fighting.svg";
import { useNavigate } from "react-router-dom";

const svgPaths: { [key: string]: string } = {
  normal,
  fighting,
  flying,
  poison,
  ground,
  rock,
  bug,
  ghost,
  steel,
  fire,
  water,
  grass,
  electric,
  psychic,
  ice,
  dragon,
  dark,
  fairy,
};

const TypeButtons = () => {
  const navigate = useNavigate();
  return (
    <TypeButtonsStyle>
      {Object.keys(svgPaths).map((svgPath, index) => (
        <img
          key={index}
          src={svgPaths[svgPath]}
          alt={svgPath}
          onClick={() => {
            navigate(`/type/${index + 1}`);
          }}
        />
      ))}
    </TypeButtonsStyle>
  );
};

const TypeButtonsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  img {
    display: flex;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 14px;
    color: white;
    text-shadow: 0 0 5px black;
    margin-bottom: 20px;
    cursor: pointer;
  }

  button img {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export default TypeButtons;
