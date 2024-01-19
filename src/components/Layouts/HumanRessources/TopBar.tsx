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
  width: calc(100% - 250px);
  user-select: none;
  z-index: 99;
  background: blue;
  padding-left: 250px;
`;
