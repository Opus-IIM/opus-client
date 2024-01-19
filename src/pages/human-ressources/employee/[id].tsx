import { EmployeeProfileScreen } from "@components/Pages/HumanRessources/EmployeeProfile";
import ROUTES from "@constants/routes";
import { useRedirect } from "@hooks/useRedirect";
import { getHumanRessourcesLayout } from "@layouts/getLayouts";
import { CustomNextPage } from "@typesDef/APP";
import { useRouter } from "next/router";

const EmployeProfile: CustomNextPage = () => {
  const router = useRouter();

  const employeId = router.query.id;

  useRedirect(
    router.isReady && !employeId && typeof employeId !== "string",
    ROUTES[404],
  );

  // TODO: ADD STORE TO HANDLE FETCH AND MAKE IT COMPONENT INDEPENDANT
  if (!router.isReady) {
    return <div>Loading...</div>;
  }
  return <EmployeeProfileScreen employeeId={employeId as string} />;
};

export default EmployeProfile;

EmployeProfile.getLayout = getHumanRessourcesLayout;
