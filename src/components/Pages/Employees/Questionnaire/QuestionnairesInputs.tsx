import styled from "styled-components";

interface QuestionnairesInputsProps {
  labelTitle: string;
  placeholder: string;
  width: string;
}

export const QuestionnairesInputs: React.FC<QuestionnairesInputsProps> = ({
  labelTitle,
  placeholder,
  width,
}: QuestionnairesInputsProps) => {
  return (
    <InputForm width={width}>
      <label>{labelTitle}</label>
      <input placeholder={placeholder} />
    </InputForm>
  );
};
const InputForm = styled.input`
  padding: 10px;
  margin: 5px 0;
`;
