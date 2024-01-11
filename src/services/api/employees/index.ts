import { requester } from "@plugins/requester";
import { Employee } from "@typesDef/Employee";

const BASE_URL = "/employees";

type employeesAPI = {
  getEmployees: typeof getEmployees;
  getEmploye: typeof getEmploye;
};
const getEmployees = async () => requester(true).get<Employee>(BASE_URL);

const getEmploye = async (id: number) =>
  requester(true).get<Employee>(`${BASE_URL}/${id}`);

const employeesApi: employeesAPI = {
  getEmployees,
  getEmploye,
};

export type { employeesAPI };
export default employeesApi;
