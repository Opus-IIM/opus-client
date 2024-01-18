import { requester } from "@plugins/requester";

const BASE_URL = "/rh";

type humanRessourcesAPI = {
  getHumanRessourcesDashboard: typeof getHumanRessourcesDashboard;
};
const getHumanRessourcesDashboard = async () =>
  requester(true).get<unknown>(`${BASE_URL}/dashboard`);

const humanRessourcesApi: humanRessourcesAPI = {
  getHumanRessourcesDashboard,
};

export type { humanRessourcesAPI };
export default humanRessourcesApi;
