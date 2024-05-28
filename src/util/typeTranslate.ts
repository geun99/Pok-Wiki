export const typeTranslate = (typeName: string): string => {
  const typeMap: { [key: string]: string } = {
    normal: "노말",
    fire: "불꽃",
    water: "물",
    electric: "전기",
    grass: "풀",
    ice: "얼음",
    fighting: "격투",
    poison: "독",
    ground: "땅",
    flying: "비행",
    rock: "바위",
    bug: "벌레",
    ghost: "고스트",
    dragon: "드래곤",
    dark: "악",
    steel: "강철",
    fairy: "페어리",
    psychic: "에스퍼",
  };

  return typeMap[typeName] || "알 수 없음";
};
