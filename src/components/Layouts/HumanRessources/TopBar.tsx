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
`;
