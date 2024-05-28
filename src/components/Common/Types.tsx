import styled from "styled-components";

const Types = ({ types }: { types: string[] }) => {
  return (
    <TypesStyle>
      {types.length == 1 && <p className={`${types[0]} oneType`}>{types[0]}</p>}
      {types.length > 1 &&
        types.map((type) => (
          <p key={type} className={type}>
            {type}
          </p>
        ))}
    </TypesStyle>
  );
};

const TypesStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  p {
    flex-basis: 50%;
    padding: 5px;
    border-radius: 100px;
    text-align: center;
    margin: 5px;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .oneType {
    flex-basis: 100%;
  }
`;

export default Types;
