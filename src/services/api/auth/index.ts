import { requester } from "@plugins/requester";
import { APIResponse } from "@typesDef/API";
import { LoginData, LoginResponse } from "@typesDef/Login";
import { RegisterData, RegisterResponse } from "@typesDef/Register";

//TODO: Change this to the correct endpoint
const LOGIN_URL = "/login-user";
const REGISTER_URL = "/register-user";

type authAPI = {
  loginUser: typeof loginUser;
  registerUser: typeof registerUser;
};

const loginUser = async (
  data: LoginData,
): Promise<APIResponse<LoginResponse>> => {
  console.log({
    step: "login api fnc",
    ...data,
  });
  return requester(true).post<LoginResponse>(LOGIN_URL, {
    data,
  });
};

const registerUser = async (
  data: RegisterData,
): Promise<APIResponse<RegisterResponse>> => {
  console.log({
    step: "register api fnc",
    ...data,
  });
  return requester(true).post<RegisterResponse>(REGISTER_URL, {
    data,
  });
};

const authApi: authAPI = {
  loginUser,
  registerUser,
};

export type { authAPI };
export default authApi;
