import { requester } from "@plugins/requester";
import { Employee } from "@typesDef/Employee";

const BASE_URL = "/employees";

type employeesAPI = {
  getEmployees: typeof getEmployees;
  getEmployee: typeof getEmployee;
  updateNoteEmployee: typeof updateNoteEmployee;
};
const getEmployees = async () => requester(true).get<Employee[]>(BASE_URL);

const getEmployee = async (id: number | string) =>
  requester(true).get<Employee>(`${BASE_URL}/${id}`);

const updateNoteEmployee = async (id: number | string, note: string) =>
  requester(true).put<Employee>(`${BASE_URL}/${id}`, { data: { note } });

const employeesApi: employeesAPI = {
  getEmployees,
  getEmployee,
  updateNoteEmployee,
};

export type { employeesAPI };
export default employeesApi;
