import { Button } from "@components/common/Button";
import { EmployeeCard } from "@components/common/Employee/EmployeeCard";
import { EmployeeInfo } from "@components/common/Employee/EmployeeInfo";
import { Employee } from "@typesDef/Employee";
import { styled } from "styled-components";

export const EmployeeProfileHeader: React.FC<{ employee: Employee }> = ({
  employee,
}) => {
  return (
    <EmployeeProfileContainer>
      <FlexContainer>
        <EmployeeCard employee={employee} />
        <Button>Prendre RDV</Button>
      </FlexContainer>
      <EmployeeInfo employee={employee} />
    </EmployeeProfileContainer>
  );
};

const EmployeeProfileContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 32px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
