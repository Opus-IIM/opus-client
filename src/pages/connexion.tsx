import React, { useContext, useEffect, useState } from "react";
import { AuthSideBanner } from "@components/common/AuthSideBanner";
import InputWithIcon from "@components/common/InputWithIcon";
import { GlobalThemeContext } from "@contexts/GlobalTheme";
import employee from "@themes/employee";
import humanResources from "@themes/humanResources";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Login() {
  const theme = useContext(GlobalThemeContext);
  const [role, setRole] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const role = router.query.role;
    switch (role) {
      case "employe":
        setRole("employe");
        theme.setGlobalTheme(employee);
        break;
      case "rh":
        setRole("rh");
        theme.setGlobalTheme(humanResources);
        break;
      default:
        router.push("/");
        break;
    }
  }, [theme, router]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/displaying-DEV/dashboard-demo");
  };

  return (
    <RegisterContainer>
      <AuthSideBanner />
      <FormContainer>
        <Title>Connexion</Title>
        <Form>
          <InputWithIcon
            icon="ri-mail-line"
            placeholder="Adresse email"
            type="email"
          />
          <InputWithIcon
            icon="ri-lock-2-line"
            placeholder="Mot de passe"
            type="password"
          />
          <Button onClick={handleClick}>Se connecter</Button>
          <LoginPrompt>
            Vous ne possédez pas de compte ? <br />{" "}
            <a href={`inscription?role=${role}`}>S&apos;inscrire</a>
          </LoginPrompt>
        </Form>
      </FormContainer>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const FormContainer = styled.div`
  flex: 1;
  max-width: 400px;
  margin: auto;
  padding: 50px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 2em;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const LoginPrompt = styled.div`
  font-size: 0.9em;
  text-align: center;
  margin-top: 2em;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.light};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  text-align: center;
  padding: 10px 0;
`;
