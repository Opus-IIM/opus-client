import employeesApi, { employeesAPI } from "./api/employees";

type SERVICESType = {
  API: employeesAPI;
};

const SERVICES: SERVICESType = {
  API: {
    ...employeesApi,
  },
};

export default SERVICES;
