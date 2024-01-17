import { useContext } from "react";
import { HomeDashboardScreen } from "@components/Pages/HumanRessources/HomeDashboard";
import { LayoutContext } from "@contexts/LayoutContext";
import { NextPage } from "next";

const HomeDashboard: NextPage = () => {
  const Layout = useContext(LayoutContext);

  Layout.setLayout("humanRessources");

  return <HomeDashboardScreen />;
};

export default HomeDashboard;
