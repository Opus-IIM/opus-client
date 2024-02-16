import styled from "styled-components";

export const StepsForm1: React.FC = () => {
  return (
    <Form1>
      <QuestionRow>
        <Question>
          <label>Évaluez votre stress au travail, de 1 à 10</label>
          <Input placeholder="Answer" />
        </Question>
        <Question>
          <label>Ressentez-vous une fatigue liée au travail ?</label>
          <Input placeholder="Answer" />
        </Question>
      </QuestionRow>
      <QuestionRow>
        <Question>
          <label>Votre charge de travail est-elle gérable ?</label>
          <Input placeholder="Answer" />
        </Question>
        <Question>
          <label>
            Discutez-vous de l&apos;épuisement avec votre supérieur ?
          </label>
          <Input placeholder="Answer" />
        </Question>
      </QuestionRow>
      <Question>
        <label>
          Dans quelle mesure sentez-vous que votre charge de travail actuelle
          affecte votre bien-être général ?
        </label>
        <TextArea placeholder="Commentaire" />
      </Question>
    </Form1>
  );
};

const Form1 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-top: 10px;
  padding: 12px 16px;
  border: 1px solid #64748b;
  border-radius: 12px;
  width: 24rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const QuestionRow = styled.div`
  display: flex;
`;

const TextArea = styled.textarea`
  font-family: "Inter", sans-serif;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #64748b;
  border-radius: 12px;

  height: 100px;
  resize: none;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
