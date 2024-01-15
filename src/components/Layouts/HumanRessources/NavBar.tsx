import { styled } from "styled-components";

export const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <h1>NavBar</h1>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  height: 100vh;
  width: 250px;
  user-select: none;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 99998;
`;
