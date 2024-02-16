import { AppLogo } from "@components/common/app/AppLogo";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

export const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <NavBarContainer>
      <AppLogoContainer
        onClick={() => {
          router.push("/");
        }}
      >
        <AppLogo />
      </AppLogoContainer>
      <MenuTitle>menu</MenuTitle>
      <MenuItem href={"/human-ressources/dashboard"}>
        <i className="ri-apps-2-fill"></i>
        <p>Dashboard</p>
      </MenuItem>
      <MenuItem href={"/human-ressources/mes-rendez-vous"}>
        <i className="ri-checkbox-line"></i>
        <p>Mes rendez-vous</p>
      </MenuItem>
      <MenuItem href={"/human-ressources/employees"}>
        <i className="ri-chat-voice-line"></i>
        <p>Les agents</p>
      </MenuItem>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  height: 100vh;
  width: calc(250px - 64px);
  user-select: none;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 32px;
`;

const AppLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 88px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey[200]};
  margin-bottom: 32px;
  cursor: pointer;
`;

const MenuTitle = styled.h3`
  font-size: 12px;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.grey[400]};
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 16px;
  margin-bottom: 16px;
`;
const MenuItem = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey[600]};
  padding: 0 16px;
  height: 48px;
  position: relative;
  z-index: 2;
  word-break: keep-all;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      border-radius: 8px;
      height: 48px;
      background-color: #f8f9fa;
      left: 0;
      z-index: -1;
    }
  }
`;
