import Image from "next/image";
import styled from "styled-components";

import logo from "../../../../public/img/logo.svg";

export const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Image
          src={logo}
          alt="OPUS Logo"
          layout="intrinsic" // Cette propriété permet de conserver le ratio d'aspect
          width={100} // Taille originale en largeur de l'image
          height={100} // Taille originale en hauteur de l'image
        />
      </LogoContainer>
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

const LogoContainer = styled.div`
  padding-top: calc(44px - 15px);
  width: 100%;
  height: calc(44px + 15px);
  border-bottom: solid 1px ${({ theme }) => theme.colors.light};
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
