import { AppLogo } from "@components/common/app/AppLogo";
import { useRouter } from "next/router";
import styled from "styled-components";

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
      <BelowContainer>
        <MenuTitle>MENU</MenuTitle>
        <Tabs>
          <Tab className="active">
            <i className="ri-questionnaire-line"></i>
            <p>Mes Questions</p>
          </Tab>
          <Tab>
            <i className="ri-checkbox-line"></i>
            <p>Mon prochain RDV</p>
          </Tab>
        </Tabs>
      </BelowContainer>
    </NavBarContainer>
  );
};

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

const NavBarContainer = styled.div`
  height: 100vh;
  width: calc(250px - 32px);
  user-select: none;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: 32px;
`;

const BelowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div`
  display: flex;
  margin-top: 20px;
  p {
    margin-left: 10px;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

const MenuTitle = styled.h3`
  margin-top: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: 94a3b8;
`;
