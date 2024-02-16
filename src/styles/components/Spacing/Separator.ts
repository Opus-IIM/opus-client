import { styled } from "styled-components";

export const Separator = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey[200]};
  margin: 32px 0;
`;
