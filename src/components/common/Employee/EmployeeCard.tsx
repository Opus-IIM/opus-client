import { SubText, TitleH4 } from "@styles/components/Text";
import { Employee } from "@typesDef/Employee";
import { styled } from "styled-components";

export const EmployeeCard: React.FC<{
  employee: Employee;
}> = ({ employee }) => {
  return (
    <EmployeeCardContainer>
      <ImageContainer url="https://randomuser.me/api/portraits/men/1.jpg" />
      <div>
        <TitleH4>
          {employee.Name} {employee.Lastname}
        </TitleH4>
        <SubText>{employee.Function}</SubText>
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
