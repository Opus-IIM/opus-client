import { requester } from "@plugins/requester";
import { Employee } from "@typesDef/Employee";

const BASE_URL = "/employees";

type employeesAPI = {
  getEmployees: typeof getEmployees;
  getEmployee: typeof getEmployee;
};
const getEmployees = async () => requester(true).get<Employee[]>(BASE_URL);

const getEmployee = async (id: number | string) =>
  requester(true).get<Employee>(`${BASE_URL}/${id}`);

const employeesApi: employeesAPI = {
  getEmployees,
  getEmployee,
};

export type { employeesAPI };
export default employeesApi;
