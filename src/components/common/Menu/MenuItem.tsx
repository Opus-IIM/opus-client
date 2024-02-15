import { styled } from "styled-components";

export const MenuItem: React.FC<{ children: string }> = ({ children }) => {
  return <MenuItemWrapper>{children}</MenuItemWrapper>;
};

const MenuItemWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.grey[400]};
  width: 230px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #eff6ff;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
