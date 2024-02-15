import { ReactElement } from "react";

import { EmployeeLayout } from "./EmployeeRessourcesLayout";
import { HumanRessourcesLayout } from "./HumanRessourcesLayout";

export const getHumanRessourcesLayout = (page: ReactElement) => {
  return <HumanRessourcesLayout>{page}</HumanRessourcesLayout>;
};
export const getEmployeeLayout = (page: ReactElement) => {
  return <EmployeeLayout>{page}</EmployeeLayout>;
};
