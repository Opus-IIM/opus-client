import { SubText, TitleH4 } from "@styles/components/Text";
import { styled } from "styled-components";

export const EmployeeCard: React.FC = () => {
  return (
    <EmployeeCardContainer>
      <ImageContainer url="https://i.pravatar.cc/300" />
      <div>
        <TitleH4>Jean Michel</TitleH4>
        <SubText>Avocat</SubText>
      </div>
    </EmployeeCardContainer>
  );
};

const EmployeeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
`;

const ImageContainer = styled.div<{ url: string }>`
  width: 64px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ url }) => url});
  border-radius: 50%;
  height: 64px;
`;
