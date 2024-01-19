import { requester } from "@plugins/requester";
import { APIResponse } from "@typesDef/API";
import { LoginData, LoginResponse } from "@typesDef/Login";

//TODO: Change this to the correct endpoint
const BASE_URL = "/login-user";

type loginAPI = {
  loginUser: typeof loginUser;
};

const loginUser = async (
  data: LoginData,
): Promise<APIResponse<LoginResponse>> => {
  console.log({
    step: "login api fnc",
    ...data,
  });
  return requester(true).post<LoginResponse>(BASE_URL, {
    data,
  });
};

const loginApi: loginAPI = {
  loginUser,
};

export type { loginAPI };
export default loginApi;
