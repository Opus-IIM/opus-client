import { useEffect, useState } from "react";
import styled from "styled-components";
interface InputProps {
  icon: string;
  placeholder: string;
  type: string;
  onChangeFnc: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithIcon: React.FC<InputProps> = ({
  icon,
  placeholder,
  type,
  onChangeFnc,
}) => {
  const [isPassword] = useState(type === "password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (!isPassword) return;
    if (isPasswordVisible) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }, [isPasswordVisible, isPassword]);

  return (
    <InputGroup>
      <i className={icon}></i>
      <StyledInput
        onChange={(e) => onChangeFnc(e)}
        type={inputType}
        placeholder={placeholder}
      />
      {isPassword && (
        <i
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className={`ri-eye-${isPasswordVisible ? "line" : "off-line"}`}
        ></i>
      )}
    </InputGroup>
  );
};

const InputGroup = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 1em;
  width: 100%;
  i {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #ccc;
  }
  i:last-child {
    cursor: pointer;
    right: 15px;
    left: auto;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  padding-left: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default InputWithIcon;
