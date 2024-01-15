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
        {children}
      </div>
    </HumanRessourcesContainer>
  );
};

const HumanRessourcesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
  background-size: 400% 400%;
  animation: main-background 10s ease infinite;
  transition: background 0.3s ease-in-out;

  .app {
    width: 100%;
    margin-top: 88px;
    margin-left: 250px;
  }
`;
