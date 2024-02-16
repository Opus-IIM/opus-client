import { CardContainer } from "@components/common/Container/CardContainer";
import { Separator } from "@styles/components/Spacing/Separator";
import { BoldText } from "@styles/components/Text";
import { styled } from "styled-components";

export const EmployeeContent: React.FC = () => {
  return (
    <EmployeeContentWrapper>
      <BoldText>Biographie</BoldText>
      <Content>
        Michel Lelieu est un employé de mairie pas comme les autres. Passionné
        par son travail d&apos;éboueur, il y voit non seulement une manière de
        contribuer au bien-être de sa communauté, mais également une source
        d&apos;inspiration inattendue pour sa passion dévorante : le design.
        <br />
        Au sein de la mairie, Michel est connu pour son dévouement et son
        travail acharné. Il commence sa journée avant l&apos;aube, parcourant
        les rues de la ville pour la garder propre et accueillante. Mais ce qui
        le distingue vraiment, c&apos;est sa capacité à voir la beauté là où
        d&apos;autres ne voient que des déchets. Michel collecte des objets
        abandonnés lors de ses tournées, qu&apos;il transforme plus tard en
        œuvres d&apos;art ou en pièces de mobilier design. Son appartement,
        véritable galerie, est peuplé de ces créations uniques, témoignages de
        sa vision créative.
      </Content>
      <Separator />
      <FlexContainer>
        <BoldText>Compétences</BoldText>
        <XpImage src="/img/figma.png" alt="employee-xp" />
      </FlexContainer>
      <Separator />
      <BoldText>Expériences</BoldText>
      <TagContainer>
        <Tag>Eboueur</Tag>
        <Tag>Chef Cuistot</Tag>
        <Tag>Secrétaire</Tag>
      </TagContainer>
      <Separator />
      <BoldText>Formation</BoldText>
      <Content>Bac S - CAP Couture</Content>
      <Separator />
      <BoldText>Contact</BoldText>
      <Content>06 43 43 43 43 - michel.Lelieu@chatennay.fr</Content>
      <Separator />
      <BoldText>Recommandation</BoldText>
      <TagContainer>
        <Tag>UI/UX Designer</Tag>
        <Tag>Couturier</Tag>
        <Tag>Retraite</Tag>
      </TagContainer>
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

const XpImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;
