import { CardContainer } from "@components/common/Container/CardContainer";
import { Separator } from "@styles/components/Spacing/Separator";
import { BoldText } from "@styles/components/Text";
import { styled } from "styled-components";

export const EmployeeContent: React.FC = () => {
  return (
    <EmployeeContentWrapper>
      <BoldText>Biographie</BoldText>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse adipisci
        hic aliquam eveniet sequi vero dolore molestias quis, impedit,
        voluptatum nobis magnam earum aperiam in! Optio corrupti consequuntur
        exercitationem rerum!
      </Content>
      <Separator />
      <FlexContainer>
        <BoldText>Compétences</BoldText>
      </FlexContainer>
      <Separator />
      <BoldText>Expériences</BoldText>
      <TagContainer>
        <Tag>UI/UX Designer</Tag>
        <Tag>UX Researcher</Tag>
        <Tag>Web Developer</Tag>
      </TagContainer>
      <Separator />
      <BoldText>Formation</BoldText>
      <Separator />
      <BoldText>Contact</BoldText>
      <Separator />
      <BoldText>Contact</BoldText>
    </EmployeeContentWrapper>
  );
};

const EmployeeContentWrapper = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.grey[400]};
  margin-top: 16px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

const Tag = styled.div`
  background-color: #eff6ff;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 250px;
  padding: 7px 16px;
`;
