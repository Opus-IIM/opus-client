import { ReactElement } from "react";

import { HumanRessourcesLayout } from "./HumanRessourcesLayout";

export const getHumanRessourcesLayout = (page: ReactElement) => {
  return <HumanRessourcesLayout>{page}</HumanRessourcesLayout>;
};
