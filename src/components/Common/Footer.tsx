import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
        <p>© 2024 Geun99</p>
      </footer>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Footer;
