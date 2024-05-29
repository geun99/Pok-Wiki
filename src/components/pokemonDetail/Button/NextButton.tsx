import { FaArrowCircleRight } from "react-icons/fa";

interface Props {
  nextId: number;
  navigate: (id: string) => void;
  nextPokemon?: string;
}
const NextButton = ({ navigate, nextPokemon, nextId }: Props) => {
  return (
    <>
      <div className="btn right-btn">
        <FaArrowCircleRight
          onClick={() => {
            if (nextId === 1025) return;
            navigate(`/detail/${nextId}`);
          }}
        />
        <p className="info">{nextId !== 1025 && nextPokemon}</p>
      </div>
    </>
  );
};

export default NextButton;
