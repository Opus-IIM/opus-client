import { requester } from "@plugins/requester";
import { APIResponse } from "@typesDef/API";
import { RegisterData, RegisterResponse } from "@typesDef/Register";

const BASE_URL = "/auth/local/register";

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
