import authApi, { authAPI } from "./api/auth";
import employeesApi, { employeesAPI } from "./api/employees";
type SERVICESType = {
  API: employeesAPI & authAPI;
};

const SERVICES: SERVICESType = {
  API: {
    ...employeesApi,
    ...authApi,
  },
};

export default SERVICES;
