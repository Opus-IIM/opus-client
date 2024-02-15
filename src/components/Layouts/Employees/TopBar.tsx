import styled from "styled-components";

export const TopBar: React.FC = () => {
  return (
    <TopBarContainer>
      <H1>Bonjour Thierry</H1>
    </TopBarContainer>
  );
};

const TopBarContainer = styled.div`
  border-left: solid 1px ${({ theme }) => theme.colors.light};
  height: 88px;
  width: calc(100% - 298px);
  user-select: none;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 250px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const H1 = styled.h1`
  font-size: 24px;
`;
