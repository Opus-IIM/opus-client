import OpusLogo from "@public/img/logo/opus-logo.svg";
import { styled } from "styled-components";

export const AppLogo: React.FC<{ hideName?: boolean }> = ({
  hideName = false,
}) => {
  return (
    <AppLogoContainer>
      <ImageContainer src={OpusLogo.src} alt="" />
      {!hideName && <TextContainer>Opus</TextContainer>}
    </AppLogoContainer>
  );
};

const AppLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 0 16px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ImageContainer = styled.img`
  width: 32px;
  height: 32px;
`;

const TextContainer = styled.p`
  font-family: adieu;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
`;
