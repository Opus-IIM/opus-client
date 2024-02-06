import styled from "styled-components";

export const StepsForm2: React.FC = () => {
  return (
    <Form1>
      <QuestionRow>
        <Question>
          <label>Votre travail vous semble-t-il significatif ?</label>
          <Input placeholder="Answer" />
        </Question>
        <Question>
          <label>Prenez-vous souvent du travail à la maison ?</label>
          <Input placeholder="Answer" />
        </Question>
      </QuestionRow>
      <QuestionRow>
        <Question>
          <label>Ressentez-vous de la satisfaction dans vos tâches ?</label>
          <Input placeholder="Answer" />
        </Question>
        <Question>
          <label>
            Avez-vous des difficultés à vous concentrer au travail ?
          </label>
          <Input placeholder="Answer" />
        </Question>
      </QuestionRow>
      <Question>
        <label>
          Quelles améliorations spécifiques à votre poste actuel pourraient
          atténuer votre sentiment d&apos;usure professionnelle ?
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
