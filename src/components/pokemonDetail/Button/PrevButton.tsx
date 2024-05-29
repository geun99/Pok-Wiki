import { FaArrowCircleLeft } from "react-icons/fa";

interface Props {
  prevId: number;
  navigate: (id: string) => void;
  prevPokemon?: string;
}
const PrevButton = ({ navigate, prevPokemon, prevId }: Props) => {
  return (
    <>
      <div className="btn left-btn">
        <FaArrowCircleLeft
          onClick={() => {
            if (prevId === 0) return;
            navigate(`/detail/${prevId}`);
          }}
        />
        <p className="info">{prevId > 0 && prevPokemon}</p>
      </div>
    </>
  );
};

export default PrevButton;
