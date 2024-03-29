import { LayoutProps } from "@typesDef/APP";
import styled from "styled-components";

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return <AppLayoutContainer>{children}</AppLayoutContainer>;
};

const AppLayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
  background-size: 400% 400%;
  animation: main-background 10s ease infinite;
  transition: background 0.3s ease-in-out;
`;
