import { useEffect, useState } from "react";
import { CardContainer } from "@components/common/Container/CardContainer";
import { MenuItem } from "@components/common/Menu/MenuItem";
import SERVICES from "@services/index";
import { BoldText } from "@styles/components/Text";
import { APIResponse } from "@typesDef/API";
import { Employee } from "@typesDef/Employee";
import { styled } from "styled-components";

import { EmployeeContent } from "./EmployeeContent";
import { EmployeeProfileHeader } from "./Header";

type EmployeeProfileProps = {
  employeeId: string;
};

export const EmployeeProfileScreen: React.FC<EmployeeProfileProps> = ({
  employeeId,
}) => {
  const [employee, setEmploye] = useState<Employee>();

  useEffect(() => {
    const getAllEmployee = async () => {
      SERVICES.API.getEmployee(employeeId)
        .then((res: APIResponse<Employee>) => {
          res.success && res.data;
          if (!res.data.attributes) return;
          setEmploye(res.data.attributes as Employee);
          console.log("@GetMostEmployees", res.data.attributes);
        })
        .catch((err) => console.error("@GetMostEmployees error", err));
    };
    getAllEmployee();
  }, [employeeId]);

  console.log("@EmployeeProfileScreen", employee);

  // if (!employee) return <div>loading...</div>;

  const _employee = {
    Name: "Michel",
    Lastname: "Lelieu",
    Function: "Eboueur",
    createdAt: "string",
    updatedAt: "string",
    publishedAt: "string",
    Email: "michel.Lelieu@chatennay.fr",
    Seniority: "43 ans",
    PhoneNumber: "06 43 43 43 43",
    Adress: "23 rue de la république, 75001 Paris",
  };

  return (
    <EmployeeProfileContainer>
      <EmployeeProfileHeader employee={_employee!} />
      <FlexContainer>
        <ColumnContainer>
          <CardContainer>
            <MenuItem>Biography</MenuItem>
            <MenuItem>Compétences</MenuItem>
            <MenuItem>Expérience</MenuItem>
            <MenuItem>Formation</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Recommandation</MenuItem>
          </CardContainer>
          <CardContainer>
            <BoldText>A propos</BoldText>
          </CardContainer>
        </ColumnContainer>
        <EmployeeContent />
      </FlexContainer>
    </EmployeeProfileContainer>
  );
};

const EmployeeProfileContainer = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 24px;
  min-height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
