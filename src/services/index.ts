import authApi, { authAPI } from "./api/auth";
import employeesApi, { employeesAPI } from "./api/employees";
import humanRessourcesApi, { humanRessourcesAPI } from "./api/human-ressources";

type SERVICESType = {
  API: employeesAPI & humanRessourcesAPI & authAPI;
};

const SERVICES: SERVICESType = {
  API: {
    ...employeesApi,
    ...authApi,
    ...humanRessourcesApi,
  },
};

export default SERVICES;
