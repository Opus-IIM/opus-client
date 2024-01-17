import { NavBar } from "@components/Layouts/HumanRessources/NavBar";
import { TopBar } from "@components/Layouts/HumanRessources/TopBar";
import { LayoutProps } from "@typesDef/APP";
import styled from "styled-components";

export const HumanRessourcesLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <HumanRessourcesContainer>
      <div className="app">
        <NavBar />
        <TopBar />
        <div className="main">{children}</div>
      </div>
    </HumanRessourcesContainer>
  );
};

const HumanRessourcesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
  background-size: 400% 400%;
  animation: main-background 10s ease infinite;
  transition: background 0.3s ease-in-out;

  .main {
    width: 100%;
    min-height: 100%;
    padding-top: 88px;
    padding-left: 250px;
  }
`;
