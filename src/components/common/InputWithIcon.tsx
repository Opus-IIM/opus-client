import { useEffect, useState } from "react";
import styled from "styled-components";
interface InputProps {
  icon: string;
  placeholder: string;
  type: string;
}

const InputWithIcon: React.FC<InputProps> = ({ icon, placeholder, type }) => {
  const [isPassword] = useState(type === "password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (isPasswordVisible) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }, [isPasswordVisible]);

  return (
    <InputGroup>
      <i className={icon}></i>
      <StyledInput type={inputType} placeholder={placeholder} />
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
  width: 100%;
  i {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #ccc;
    font-size: 20px;
  }
  i:last-child {
    cursor: pointer;
    right: 15px;
    left: auto;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  padding-left: 48px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default InputWithIcon;
