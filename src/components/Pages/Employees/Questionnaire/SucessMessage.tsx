import Image from "next/image";
import styled from "styled-components";
export const SuccessMessage: React.FC = () => {
  return (
    <SuccessMessageContainer>
      <ImageContainer>
        <Image
          src="/img/thumb-up.png"
          alt="OPUS Logo"
          layout="intrinsic" // Cette propriété permet de conserver le ratio d'aspect
          width={300} // Taille originale en largeur de l'image
          height={100} // Taille originale en hauteur de l'image
        />
      </ImageContainer>
      <Content>
        <h1>Job is done !</h1>

        <p>Tu as déjà répondu aux questions ce mois-ci !</p>
        <p>Les prochaines seront disponible à partir du 12/03</p>

        <Button>Mettre un rappel</Button>
      </Content>
    </SuccessMessageContainer>
  );
};

const SuccessMessageContainer = styled.div`
  position: relative; // Position relative pour le conteneur principal
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 30rem;
`;

const Content = styled.div`
  z-index: 1; // Un z-index supérieur pour s'assurer qu'il s'affiche par-dessus l'image
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white; // Couleur de fond pour le texte et le bouton
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Optionnel: ajoute une ombre pour le relief
  h1 {
    margin-bottom: 20px;
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

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

const ImageContainer = styled.div`
  position: absolute;
  top: -40px;
  right: -30px;
`;
