import { QuestionnaireScreen } from "@components/Pages/Employees/Questionnaire/Index";
import { getEmployeeLayout } from "@layouts/getLayouts";
import { CustomNextPage } from "@typesDef/APP";

const EmployeesQuestionnaire: CustomNextPage = () => {
  return <QuestionnaireScreen />;
};

export default EmployeesQuestionnaire;

EmployeesQuestionnaire.getLayout = getEmployeeLayout;
