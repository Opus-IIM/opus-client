import styled from "styled-components";

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-family: Adieu;
  font-style: normal;
  font-size: 80px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.light};
`;

export const Subtitle = styled.p`
  text-align: center;
  font-family: Adieu;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.light};
`;
