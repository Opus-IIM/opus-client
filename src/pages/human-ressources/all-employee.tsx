import { useContext } from "react";
import { AllEmployeesScreen } from "@components/Pages/HumanRessources/AllEmployees";
import { LayoutContext } from "@contexts/LayoutContext";
import { NextPage } from "next";

const AllEmployees: NextPage = () => {
  const Layout = useContext(LayoutContext);

  Layout.setLayout("humanRessources");

  return <AllEmployeesScreen />;
};

export default AllEmployees;
