import { requester } from "@plugins/requester";
import { APIResponse } from "@typesDef/API";
import { RegisterData, RegisterResponse } from "@typesDef/Register";

//TODO: Change this to the correct endpoint
const BASE_URL = "/register-user";

type registerAPI = {
  registerUser: typeof registerUser;
};

const registerUser = async (
  data: RegisterData,
): Promise<APIResponse<RegisterResponse>> => {
  console.log({
    step: "register api fnc",
    ...data,
  });
  return requester(true).post<RegisterResponse>(BASE_URL, {
    data,
  });
};

const registerApi: registerAPI = {
  registerUser,
};

export type { registerAPI };
export default registerApi;
