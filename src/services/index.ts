import employeesApi, { employeesAPI } from "./api/employees";
import humanRessourcesApi, { humanRessourcesAPI } from "./api/human-ressources";

type SERVICESType = {
  API: employeesAPI & humanRessourcesAPI;
};

const SERVICES: SERVICESType = {
  API: {
    ...employeesApi,
    ...humanRessourcesApi,
  },
};

export default SERVICES;
