import { HomeDashboardScreen } from "@components/Pages/HumanRessources/HomeDashboard";
import { getHumanRessourcesLayout } from "@layouts/getLayouts";
import { CustomNextPage } from "@typesDef/APP";

const HomeDashboard: CustomNextPage = () => {
  return <HomeDashboardScreen />;
};

export default HomeDashboard;

HomeDashboard.getLayout = getHumanRessourcesLayout;
