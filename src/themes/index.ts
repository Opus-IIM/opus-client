import { Theme } from "@typesDef/themes";

import employee from "./employee";
import humanResources from "./humanResources";
import main from "./main";

const complete = (theme: Theme) => {
  return { ...main, ...theme };
};

const themes = {
  employee: complete(employee),
  humanResources: complete(humanResources),
};

export default themes;
