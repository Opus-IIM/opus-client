import { AuthSideBanner } from "@components/common/AuthSideBanner";
import styled from "styled-components";

export default function Register() {
  return (
    <RegisterContainer>
      Register
      <AuthSideBanner />
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;
