import { AuthSideBanner } from "@components/common/AuthSideBanner";
import styled from "styled-components";

export default function Login() {
  return (
    <LoginContainer>
      <AuthSideBanner />
      Login
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;
