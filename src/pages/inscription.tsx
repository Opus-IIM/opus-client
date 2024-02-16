import { useContext, useEffect, useState } from "react";
import { AuthSideBanner } from "@components/common/AuthSideBanner";
import InputWithIcon from "@components/common/InputWithIcon";
import { GlobalThemeContext } from "@contexts/GlobalTheme";
import employee from "@themes/employee";
import humanResources from "@themes/humanResources";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Register() {
  const theme = useContext(GlobalThemeContext);
  const [role, setRole] = useState("");
  const [, setEmail] = useState("");
  const [, setPassword] = useState("");
  const [, setUsername] = useState("");
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
  }, [theme]);

  return (
    <RegisterContainer>
      <AuthSideBanner />
      <FormContainer>
        <Title>Inscription</Title>
        <Form>
          <InputWithIcon
            icon="ri-user-line"
            placeholder="Nom"
            type="text"
            onChangeFnc={(e) => setUsername(e.target.value)}
          />
          <InputWithIcon
            icon="ri-mail-line"
            placeholder="Adresse email"
            type="email"
            onChangeFnc={(e) => setEmail(e.target.value)}
          />
          <InputWithIcon
            icon="ri-lock-2-line"
            placeholder="Mot de passe"
            type="password"
            onChangeFnc={(e) => setPassword(e.target.value)}
          />
          <Button>S&apos;inscrire</Button>
          <LoginPrompt>
            Vous possédez déjà un compte ? <br />{" "}
            <a href={`connexion?role=${role}`}>Se connecter</a>
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
  background-color: ${({ theme }) => theme.colors.white};
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
