import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getIdByName } from "../../api/pokemon";

const Input = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget.elements.namedItem(
      "pokemonInput"
    ) as HTMLInputElement;
    if (isNaN(Number(inputElement.value))) {
      getIdByName(inputElement.value.toLowerCase()).then(
        (number) => {
          navigate(`/detail/${number}`);
        },
        () => {
          alert("포켓몬을 찾을 수 없습니다.");
        }
      );
    } else {
      navigate(`/detail/${inputElement.value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputStyle>
        <input
          type="text"
          name="pokemonInput"
          placeholder="포켓몬의 영문 이름 혹은 전국 도감 번호를 입력해주세요!"
          className="pokemonSearch"
        />
      </InputStyle>
    </form>
  );
};

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  .pokemonSearch {
    width: 50%;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 12px;
    border: 1px solid #ccc;
    font-size: 1.25rem;
  }
  @media (max-width: 768px) {
    .pokemonSearch {
      width: 100%;
      font-size: 0.75rem;
    }
  }
`;

export default Input;
