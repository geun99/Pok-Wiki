<div align="center">
 <img src="https://pok-wiki.vercel.app/assets/pokewiki-Ds_gndIL.png"/>
  <h1>PokéWiki</h1>
</div>

## 📎 [PokéWiki 배포링크](https://pok-wiki.vercel.app/)


## 💡 프로젝트 소개
Open API인 Poke API를 이용한 포켓몬 정보사이트


## 🛠 사용한 기술 스택

- React
- TypeScript
- Vite(번들링 툴)
- Styled-components(CSS in JavaScript)
- Axios
- Tanstack-Query(무한 스크롤 구현)
- React-Lazy-Load-Image-Component(이미지 로딩속도 감소)
- Vercel(배포)

## 🛠 기능
### ✔︎ 전체 포켓몬 목록 
- 모든 포켓몬들의 목록을 보여줍니다
- 이미지, 도감번호(전국 도감기준), 이름, 속성정보를 담고있습니다.
- 클릭시 해당 포켓몬의 상세페이지로 이동합니다.
<details markdown="1">
<summary>전체 포켓몬 목록</summary>



</details>

### ✔︎ 타입 필터
- 포켓몬을 타입에 따라 필터링해줍니다.
- 선택한 속성에 맞춰 배경색이 변합니다.
- 클릭시 해당 포켓몬의 상세페이지로 이동합니다.
<details markdown="1">
<summary>타입 필터</summary>

![타입필터무한스크롤](https://github.com/geun99/Pok-Wiki/assets/150868973/9771d720-51f7-4a54-a8a7-d7a84fda4347)


</details>

### ✔︎ 포켓몬 상세 페이지
- 포켓몬의 상세 정보를 확인할 수 있습니다.
- 도감 번호, 이름, 분류, 이미지, 타입, 설명, 키, 몸무게, 능력치 정보를 담고있습니다.
- 다음과 이전 버튼을 눌러 도감 번호기준 다음 포켓몬, 이전 포켓몬의 상세페이지로 이동할 수 있습니다.
- 배경 색상이 해당 포켓몬의 속성에 따라 변합니다.
<details markdown="1">
<summary>상세 페이지</summary>
 
![](https://velog.velcdn.com/images/geun99/post/d44e496e-ffb9-4f8a-82ef-14bf022602ce/image.gif)
![상세페이지모바일](https://github.com/geun99/Pok-Wiki/assets/150868973/5070f7d2-3a79-470d-a46c-f691853ece6f)

</details>


## 📁 Directory Structure
```
📦src
  ┣ 📂api		: poke api 호출
  ┣ 📂assets		: 이미지 파일
  ┣ 📂components	: 컴포넌트
  ┣ 📂constants	: 상수
  ┣ 📂hooks		: 커스텀 훅
  ┣ 📂pages		: Route 관리
  ┣ 📂types		: Type관리
  ┣ 📂utils		: 포켓몬 타입 번역 함수수
┣ 📜tsconfig.json	: TypeScript설정
┣ 📜vite.config.ts	: Vite설정
┣ 📜.eslintrc.cjs 	: ESLint 설정
```


