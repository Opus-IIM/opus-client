import { NavBar } from "@components/Layouts/Employees/NavBar";
import { TopBar } from "@components/Layouts/Employees/TopBar";
import { LayoutProps } from "@typesDef/APP";
import styled from "styled-components";

export const EmployeeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <EmployeeContainer>
      <div className="app">
        <NavBar />
        <div className="main">
          <TopBar />
          <div className="container">{children}</div>
        </div>
      </div>
    </EmployeeContainer>
  );
};

const EmployeeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.light};
  background-size: 400% 400%;
  animation: main-background 10s ease infinite;
  transition: background 0.3s ease-in-out;

  .app {
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
