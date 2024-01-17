import { useEffect, useState } from "react";
import SERVICES from "@services/index";
import { APIResponse } from "@typesDef/API";
import { Employee } from "@typesDef/Employee";

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
        .then((res: APIResponse<Employee>) => res.success && res.data)
        .then((employee) => {
          if (!employee) return;
          setEmploye(employee);
          console.log("@GetMostEmployees", employee);
        })
        .catch((err) => console.error("@GetMostEmployees error", err));
    };
    getAllEmployee();
  }, [employeeId]);

  console.log("@EmployeeProfileScreen", employee);

  return (
    <div>
      <h1>EmployeeProfileScreen </h1>
    </div>
  );
};
