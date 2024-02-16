import { styled } from "styled-components";

type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  display: flex;
  width: 247px;
  height: 47px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
