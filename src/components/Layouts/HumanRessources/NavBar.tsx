import { AppLogo } from "@components/common/app/AppLogo";
import { styled } from "styled-components";

export const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <AppLogo />
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  height: 100vh;
  width: calc(250px - 32px);
  user-select: none;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.white};
  padding: 32px 16px;
`;
