import { BoldText, SubText } from "@styles/components/Text";
import { Employee } from "@typesDef/Employee";
import { styled } from "styled-components";

export const EmployeeInfo: React.FC<{ employee: Employee }> = ({
  employee,
}) => {
  return (
    <EmployeeInfoContainer>
      <div>
        <SubText>Email</SubText>
        <BoldText>{employee.Email || "-"}</BoldText>
      </div>
      <div>
        <SubText>Tèl.</SubText>
        <BoldText>{employee.PhoneNumber || "-"}</BoldText>
      </div>
      <div>
        <SubText>Adresse</SubText>
        <BoldText>{employee.Adress || "-"}</BoldText>
      </div>
      <div>
        <SubText>Age</SubText>
        <BoldText>{employee.Seniority || "-"}</BoldText>
      </div>
    </EmployeeInfoContainer>
  );
};

const EmployeeInfoContainer = styled.div`
  background: ${({ theme }) => theme.colors.light};
  width: auto;
  width: calc(100% - 64px);
  border-radius: 8px;
  padding: 16px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > div {
    width: fit-content;
    gap: 8px;
    width: 25%;
    border-right: 1px solid ${({ theme }) => theme.colors.grey[200]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & > div:last-child {
    border-right: none;
  }
`;
