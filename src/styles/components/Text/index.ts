import { styled } from "styled-components";

export const TitleH4 = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%;
`;

export const SubText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.grey[400]};
`;
