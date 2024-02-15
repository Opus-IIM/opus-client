import { useEffect, useState } from "react";
import SERVICES from "@services/index";
import { APIResponse } from "@typesDef/API";
import { Employee } from "@typesDef/Employee";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export const AllEmployeesScreen: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeeId] = useState("");
  const router = useRouter();

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
          <H2>Mes Agents</H2>
          <EmployeesTest>
            1 - 50
          </EmployeesTest>
        </EmployeesHeader>
        <EmployeesListContainer>
          <EmployeesTable>
            <EmployeesThead>
              <TR>
                <THFirst scope="col">Nom de l'agent</THFirst>
                <TH scope="col">E-mail</TH>
                <TH scope="col">Poste</TH>
                <TH scope="col">Usure</TH>
                <THLast scope="col"></THLast>
              </TR>
            </EmployeesThead>
            <EmployeesTbody>
              <tr>
                  <TD>
                    <Link href={`employee/${employeeId}`}>
                      <DIVCENTER>
                        <IMG src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                        <SPAN>Lucas</SPAN>
                      </DIVCENTER>
                    </Link>
                  </TD>
                  <TD>E-mail</TD>
                  <TD>RH</TD>
                <TDUSURE><span></span></TDUSURE>
                  <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href={`employee/${employeeId}`}>
                    <DIVCENTER>
                      <IMG src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                      <SPAN>Lucas</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>E-mail</TD>
                <TD>Dev</TD>
                <TDUSURE><span className="red"></span></TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href={`employee/${employeeId}`}>
                    <DIVCENTER>
                      <IMG src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                      <SPAN>Lucas</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>E-mail</TD>
                <TD>CDP</TD>
                <TDUSURE><span className="orange"></span></TDUSURE>
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

const EmployeesTbody = styled.tbody`

`;

const SPAN = styled.span`
  color: black;
  margin-left: 48px;
`;

const DIVCENTER = styled.div`
  display: flex;
  align-items: center;
`;

const TR = styled.tr`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
`;

const TH = styled.th`
  padding: 16px;
`;

const THFirst = styled.th`
  padding: 16px;
  border-radius: 8px 0 0 8px;
`;

const THLast = styled.th`
  padding: 16px;
  border-radius: 0 8px 8px 0;
`;

const TD = styled.td`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
`;

const TDUSURE = styled.td`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  position: relative;
  
  span {
    position: absolute;
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background-color: green;
  }

  span.red {
    background-color: red;
  }
  span.orange {
    background-color: orange;
  }
`;

const IMG = styled.img`
  position: absolute;
  border-radius: 12px;
  height: 32px;
  width: 32px;
  object-fit: cover;
`;