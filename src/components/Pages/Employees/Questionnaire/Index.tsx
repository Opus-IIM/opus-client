import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { StepsForm } from "./StepsForm";
import { SuccessMessage } from "./SucessMessage";
export const QuestionnaireScreen: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = StepsForm.length + 1;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Container>
      <Header>
        {step !== totalSteps &&
          Array.from({ length: totalSteps }, (_, index) => (
            <React.Fragment key={index}>
              {index > 0 && <StepBar isActive={step > index} />}
              <StepIndicator isActive={step >= index + 1} />
            </React.Fragment>
          ))}
      </Header>
      {step < totalSteps && (
        <Form onSubmit={handleSubmit}>
          {React.createElement(StepsForm[step - 1])}
          <NavButtons>
            <Button
              style={{ visibility: step === 1 ? "hidden" : "visible" }}
              type="button"
              onClick={handlePrevious}
            >
              Retour
            </Button>
            <Button type="submit">
              {step === totalSteps - 1 ? "Terminer" : "Suivant"}
            </Button>
          </NavButtons>
        </Form>
      )}
      {step === totalSteps && <SuccessMessage />}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const StepIndicator = styled.div<{ isActive: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${(props) => (props.isActive ? "green" : "lightgrey")};
  margin: 0 5px;
  box-shadow: ${(props) => (props.isActive ? "0px 0px 10px green" : "none")};
`;

const StepBar = styled.div<{ isActive: boolean }>`
  height: 5px;
  flex-grow: 1;
  background-color: ${(props) => (props.isActive ? "green" : "lightgrey")};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// const TextArea = styled.textarea`
//   padding: 10px;
//   margin: 5px 0;
// `;

const Button = styled.button`
  padding: 12px;
  background-color: green;
  color: white;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  width: fit-content;
  border-radius: 12px;
  width: 14rem;
  text-align: center;
`;

const NavButtons = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
