import React from "react";
import { getHumanRessourcesLayout } from "@layouts/getLayouts";
import { CustomNextPage } from "@typesDef/APP";
import styled from "styled-components";

const MesRendezVous: CustomNextPage = () => {
  return (
      <MainPage>
        <DashboardContent>
          <DataBlock className="allMeets">
            <div className="rdvDisplayList">
              <div className="titleRdv">
                <h1>Tous mes RDV</h1>
                <div className="titleRdvDate">
                  <p>Dec 20 - Dec 31</p>
                  <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M12 3.33301H3.99999C3.26361 3.33301 2.66666 3.92996 2.66666 4.66634V12.6663C2.66666 13.4027 3.26361 13.9997 3.99999 13.9997H12C12.7364 13.9997 13.3333 13.4027 13.3333 12.6663V4.66634C13.3333 3.92996 12.7364 3.33301 12 3.33301Z"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.6667 2V4.66667"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.33331 2V4.66667"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2.66666 7.33301H13.3333"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.33331 10H7.99998"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8 10V12"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="rdvsMenu">
                <RdvMenu>
                  <input type="checkbox" id="scales" name="scales" />
                  <div className=""></div>
                  <div className="listRdv">
                    <p className="agent agentName">Nom de l'agent</p>
                    <p className="agent">Secteur</p>
                    <p className="agent">RDV n°</p>
                    <p className="agent">Note d'usure</p>
                    <p className="agent"></p>
                    <p className="agent">...</p>
                  </div>
                </RdvMenu>
                <Rdv>
                  <input type="checkbox" id="scales" name="scales" checked />
                  <img src="https://thispersondoesnotexist.com/" />
                  <div className="listRdv">
                    <p className="agent">Andreana Viola</p>
                    <p className="agent">Apple</p>
                    <p className="agent">100</p>
                    <p className="agent">87</p>
                    <p className="agent">Voir le profil</p>
                    <p className="agent">...</p>
                  </div>
                </Rdv>
                <hr />
                <Rdv>
                  <input type="checkbox" id="scales" name="scales" />
                  <img src="https://thispersondoesnotexist.com/" />
                  <div className="listRdv">
                    <p className="agent">Andreana Viola</p>
                    <p className="agent">Apple</p>
                    <p className="agent">100</p>
                    <p className="agent">87</p>
                    <p className="agent">Voir le profil</p>
                    <p className="agent">...</p>
                  </div>
                </Rdv>
                <hr />
                <Rdv>
                  <input type="checkbox" id="scales" name="scales" />
                  <img src="https://thispersondoesnotexist.com/" />
                  <div className="listRdv">
                    <p className="agent">Andreana Viola</p>
                    <p className="agent">Apple</p>
                    <p className="agent">100</p>
                    <p className="agent">87</p>
                    <p className="agent">Voir le profil</p>
                    <p className="agent">...</p>
                  </div>
                </Rdv>
              </div>
            </div>
          </DataBlock>
        </DashboardContent>
        <DashboardContent>
          <SecondDataBlock className="nextMeets">
            <div className="rdvDisplayList">
              <div className="title">
                <h1>Vos prochains RDV</h1>
                <hr />
              </div>
              <div className="rdvs">
                <Rdv>
                  <img src="https://thispersondoesnotexist.com/" />
                  <div className="agentAndDate">
                    <p className="agent">Andreana Viola</p>
                    <p className="date">12/05/23 - 08:30</p>
                  </div>
                </Rdv>
                <hr />
                <Rdv>
                  <img src="https://thispersondoesnotexist.com/" />
                  <div className="agentAndDate">
                    <p className="agent">Andreana Viola</p>
                    <p className="date">12/05/23 - 08:30</p>
                  </div>
                </Rdv>
                <hr />
                <Rdv>
                  <img src="https://thispersondoesnotexist.com/" />
                  <div className="agentAndDate">
                    <p className="agent">Andreana Viola</p>
                    <p className="date">12/05/23 - 08:30</p>
                  </div>
                </Rdv>
              </div>
              <a href="#" className="seeAll">
                See All
              </a>
            </div>
          </SecondDataBlock>
        </DashboardContent>
      </MainPage>
  );
};

export default MesRendezVous;

MesRendezVous.getLayout = getHumanRessourcesLayout;

const MainPage = styled.div`
  display: flex;
  background-color: #eeeeee;
  height: 90vh;

  h1 {
    font-size: 1rem;
    font-weight: bold;
  }

  hr {
    border: 2px solid #f8f9fa;
    width: 100%;
  }
`;

const Rdv = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  gap: 1rem;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .listRdv {
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 0.25rem;

    .date {
      color: #64748b;
      font-size: 0.9rem;
    }
  }

  .agentAndDate {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .agent {
      font-weight: bold;
    }
    .date {
      color: #64748b;
      font-size: 0.9rem;
    }
  }
`;

const RdvMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  gap: 1rem;
  background-color: #eeeeee;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .listRdv {
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 0.25rem;

    .agent {
      font-weight: bold;
    }

    .agentName {
      margin-left: 8%;
    }
    .date {
      color: #64748b;
      font-size: 0.9rem;
    }
  }

  .agentAndDate {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .agent {
      font-weight: bold;
    }

    .date {
      color: #64748b;
      font-size: 0.9rem;
    }
  }
`;

const DashboardContent = styled.div`
  margin: 2%;

  .titleRdv {
    display: flex;
    justify-content: space-between;
    margin: 2%;
  }

  .titleRdvDate {
    display: flex;
  }
`;

const SecondDataBlock = styled.div`

  margin-left: 300px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 80vh;

  .rdvDisplayList {
    padding: 0.75rem 1.5rem;
    background-color: white;
    border-radius: 0.5rem;
  }

  .category {
    font-weight: bold;
    color: #64748b;
  }

  .seeAll {
    display: flex;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    color: #000000;
    font-weight: bold;
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
  }
`;

const DataBlock = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  width: 150%;

  .category {
    font-weight: bold;
    color: #64748b;
  }
`;
