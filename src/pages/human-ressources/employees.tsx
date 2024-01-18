import { AllEmployeesScreen } from "@components/Pages/HumanRessources/AllEmployees";
import { getHumanRessourcesLayout } from "@layouts/getLayouts";
import { CustomNextPage } from "@typesDef/APP";

const AllEmployees: CustomNextPage = () => {
  return <AllEmployeesScreen />;
};

export default AllEmployees;

AllEmployees.getLayout = getHumanRessourcesLayout;
