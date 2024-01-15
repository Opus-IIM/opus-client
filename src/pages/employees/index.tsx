import { useEffect, useState } from "react";
import SERVICES from "@services/index";
import { APIResponse } from "@typesDef/API";
import { Employee } from "@typesDef/Employee";
import { NextPage } from "next";

const Employees: NextPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

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

  return <div>Employees</div>;
};

export default Employees;
