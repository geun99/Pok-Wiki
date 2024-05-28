import styled from "styled-components";
import logo from "../../assets/pokewiki.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <div
        className="navbar"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} alt="Pokeball" />
        <h1>Poke Wiki</h1>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  .navbar {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 50px;
    }
  }
`;

export default Header;
