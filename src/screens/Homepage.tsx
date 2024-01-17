import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";

import logo from "../../public/img/opus-logo-white.png";

export const HomeScreen: React.FC = () => {
  return (
    <HomePageContainer>
      <EmployeeSection
        onClick={() => {
          Router.push("/connexion?role=employe");
        }}
      >
        JE SUIS EMPLOYÉ
      </EmployeeSection>

      <LogoContainer>
        <Image
          src={logo}
          alt="OPUS Logo"
          layout="intrinsic" // Cette propriété permet de conserver le ratio d'aspect
          width={200} // Taille originale en largeur de l'image
          height={100} // Taille originale en hauteur de l'image
        />
      </LogoContainer>

      <RHSection
        onClick={() => {
          Router.push("/connexion?role=rh");
        }}
      >
        JE SUIS RH
      </RHSection>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;

const HalfPage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: white;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: filter 0.3s ease-in-out;
  &:hover {
    filter: brightness(110%);
  }
`;

const EmployeeSection = styled(HalfPage)`
  background-color: #4caf50;
`;

const RHSection = styled(HalfPage)`
  background-color: #2196f3;
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;
