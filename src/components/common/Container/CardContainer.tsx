import { styled } from "styled-components";

type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};
export const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className,
}) => {
  return (
    <CardContainerWrapper className={className}>
      {children}
    </CardContainerWrapper>
  );
};

const CardContainerWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 8px;
`;
