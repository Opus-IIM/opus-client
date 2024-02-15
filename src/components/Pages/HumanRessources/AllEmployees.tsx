import { useEffect, useState } from "react";
import SERVICES from "@services/index";
import { APIResponse } from "@typesDef/API";
import { Employee } from "@typesDef/Employee";
import Link from "next/link";
import styled from "styled-components";

export const AllEmployeesScreen: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeeId] = useState("");

  useEffect(() => {
    const getAllEmployee = async () => {
      SERVICES.API.getEmployees()
        .then((res: APIResponse<Employee[]>) => res.success && res.data)
        .then((employees) => {
          if (!employees) return;
          setEmployees(employees);
          console.log("@GetMostEmployees", employees);
        })
        .catch((err) => console.error("@GetMostEmployees error", err));
    };
    getAllEmployee();
  }, []);

  console.log("@employees", employees);
  return (
    <AllEmployees>
      <EmployeesContainer>
        <EmployeesHeader>
          <H2>Tous les employés</H2>
          <EmployeesTest>1 - 50</EmployeesTest>
        </EmployeesHeader>
        <EmployeesListContainer>
          <EmployeesTable>
            <EmployeesThead>
              <tr>
                <TH scope="col">Nom de l’employé</TH>
                <TH scope="col">E-mail</TH>
                <TH scope="col">Poste</TH>
                <TH scope="col"></TH>
              </tr>
            </EmployeesThead>
            <EmployeesTbody>
              <tr>
                <TD>
                  <Link href={`employee/${employeeId}`}>
                    <IMG src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <SPAN>Lucas</SPAN>
                  </Link>
                </TD>
                <TD>E-mail</TD>
                <TD>RH</TD>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>Dene</TD>
                <TD>E-mail</TD>
                <TD>Dev</TD>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>Michel</TD>
                <TD>E-mail</TD>
                <TD>CDP</TD>
                <TD>...</TD>
              </tr>
            </EmployeesTbody>
          </EmployeesTable>
        </EmployeesListContainer>
      </EmployeesContainer>
    </AllEmployees>
  );
};

const AllEmployees = styled.section`
  background-color: ${({ theme }) => theme.colors.light};
  min-height: calc(100dvh - 88px);
  width: calc(100% - 48px);
  padding: 24px;
`;

const EmployeesContainer = styled.div`
  width: calc(100% - 48px);
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 20px;
`;

const EmployeesHeader = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const EmployeesTest = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 12px;
  padding: 8px;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  font-weight: 600;
  font-size: 16px;
`;

const EmployeesListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const EmployeesTable = styled.table`
  width: 100%;
`;

const EmployeesThead = styled.thead`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.gray[600]};
  padding: 20px;
`;

const EmployeesTbody = styled.tbody``;

const SPAN = styled.span`
  transform: translateY(-8px);
  color: black;
`;

const TH = styled.th`
  padding: 16px;
  border-radius: 8px;
`;

const TD = styled.td`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
`;

const IMG = styled.img`
  border-radius: 12px;
  height: 32px;
  width: 32px;
  object-fit: cover;
  margin-right: 16px;
`;
