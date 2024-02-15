import { NavBar } from "@components/Layouts/HumanRessources/NavBar";
import { TopBar } from "@components/Layouts/HumanRessources/TopBar";
import { LayoutProps } from "@typesDef/APP";
import styled from "styled-components";

export const HumanRessourcesLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <HumanRessourcesContainer>
      <div className="app">
        <NavBar />
        <div className="main">
          <TopBar />
          <div className="container">{children}</div>
        </div>
      </div>
    </HumanRessourcesContainer>
  );
};

const HumanRessourcesContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
  background-size: 400% 400%;
  animation: main-background 10s ease infinite;
  transition: background 0.3s ease-in-out;

  .app {
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .main {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .main {
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .container {
        min-height: 100%;
        width: calc(100% - 250px);
        margin-left: 250px;
      }
    }
  }
`;
