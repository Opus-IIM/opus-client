import { Subtitle, Title } from "@styles/components/typography.styled";
import styled from "styled-components";

export const AuthSideBanner: React.FC = () => {
  return (
    <AuthBannerContainer>
      <Title>Opus</Title>
      <Subtitle>the new way to prevent professional loan shark</Subtitle>
    </AuthBannerContainer>
  );
};

const AuthBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
