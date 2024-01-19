import employeesApi, { employeesAPI } from "./api/employees";
import loginApi, { loginAPI } from "./api/login";
import registerApi, { registerAPI } from "./api/register";
type SERVICESType = {
  API: employeesAPI & registerAPI & loginAPI;
};

const SERVICES: SERVICESType = {
  API: {
    ...employeesApi,
    ...registerApi,
    ...loginApi,
  },
};

export default SERVICES;
