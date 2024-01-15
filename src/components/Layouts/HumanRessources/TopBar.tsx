import { styled } from "styled-components";

export const TopBar: React.FC = () => {
  return (
    <TopBarContainer>
      <h1>TopBar</h1>
    </TopBarContainer>
  );
};

const TopBarContainer = styled.div`
  height: 88px;
  width: 100%;
  user-select: none;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 99;
  background: blue;
  padding-left: 250px;
`;
