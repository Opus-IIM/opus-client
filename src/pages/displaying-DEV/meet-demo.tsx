import React from "react";
import styled from "styled-components";

const MainPage = styled.div`
  display: flex;
  background-color: #eeeeee;

  h1 {
    font-size: 1rem;
    font-weight: bold;
  }

  .headerAndContent {
    width: 85vw;
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

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: space-between;
  height: 89.6vh;
  width: 12.35vw;
  padding: 3rem 1.5rem;
  border-right: 3px solid #f8f9fa;

  .appName {
    font-family: adieu;
    font-size: 2rem;
    font-weight: bold;
  }

  hr {
    margin: 2rem 0rem 1.5rem 0rem;
  }

  .lastHr {
    margin-bottom: 0;
  }

  .sidebarMenu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .menuTitle {
      font-size: 0.9rem;
      font-weight: bold;
      color: #64748b;
    }

    a {
      background-color: transparent;
      border: none;
      margin-top: 0.5rem;
      align-items: center;
      display: flex;
      gap: 1rem;
      padding: 0.5rem 1rem;
      width: 13rem;
      font-size: 1rem;
      color: #64748b;

      i {
        font-size: 1.5rem;
      }

      p {
        padding: 0 0 0.25rem 0;
      }

      &:hover {
        border-radius: 1rem;
        background-color: #f8fafc;
        color: #1e73be;
        cursor: pointer;
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  height: 8vh;
  padding: 0rem 1.5rem;

  .rightElements {
    display: flex;
    align-items: center;
    gap: 2rem;

    input {
      width: 15rem;
      height: 2rem;
      border-radius: 1rem;
      border: 2px solid #f8f9fa;
      padding: 0.5rem 1.5rem;
    }

    .ri-notification-2-line {
      &:hover {
        border-radius: 1rem;
        background-color: #f8fafc;
        cursor: pointer;
      }
    }

    button {
      background-color: transparent;
      border: none;
      font-size: 1rem;
      padding: 0.5rem 1rem;

      &:hover {
        background-color: #f8fafc;
        border-radius: 1rem;
        cursor: pointer;
      }
    }

    .profileBtn {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }
    }

      .idAndBtn {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .userId {
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        .name {
          font-weight: bold;
        }
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
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  width: 25%;
  float: right;

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
  width: 65%;

  .category {
    font-weight: bold;
    color: #64748b;
  }
`;

export default function Dashboard() {
  return (
      <MainPage>
        <SideBar>
          <div>
            <div>
              <svg width="97" height="29" viewBox="0 0 97 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.529798 4.8766C0 6.15565 0 7.77712 0 11.0201V17.9801C0 21.223 0 22.8445 0.529798 24.1236C1.2362 25.829 2.59113 27.1839 4.29652 27.8903C5.57557 28.4201 7.19704 28.4201 10.44 28.4201H17.4C20.643 28.4201 22.2644 28.4201 23.5435 27.8903C25.2489 27.1839 26.6038 25.829 27.3102 24.1236C27.84 22.8445 27.84 21.223 27.84 17.9801V11.0201C27.84 7.77712 27.84 6.15565 27.3102 4.8766C26.6038 3.17121 25.2489 1.81627 23.5435 1.10988C22.2644 0.580078 20.643 0.580078 17.4 0.580078H10.44C7.19705 0.580078 5.57557 0.580078 4.29652 1.10988C2.59113 1.81627 1.2362 3.17121 0.529798 4.8766ZM13.4999 8.4707L13.8223 8.63551C14.6365 9.05176 15.3747 9.59535 16.0105 10.2401C15.0768 10.7262 14.2302 11.3565 13.5001 12.1015C12.7699 11.3565 11.9232 10.7261 10.9894 10.24C11.6252 9.59527 12.3633 9.05174 13.1775 8.63551L13.4999 8.4707ZM7.9613 10.6819C9.76443 11.0131 11.3674 11.9124 12.5787 13.1869C11.3765 14.8277 10.6667 16.8518 10.6667 19.0417C10.6667 20.1239 10.84 21.1656 11.1605 22.1406C8.79713 21.2078 7.125 18.9034 7.125 16.2086V10.5283L7.9613 10.6819ZM19.0387 10.6819L19.875 10.5283V16.2086C19.875 19.7294 17.0208 22.5836 13.5 22.5836C13.3345 22.5836 13.169 22.5777 13.0036 22.5718C12.9464 22.5698 12.8892 22.5678 12.832 22.566L12.6618 22.1299C12.2881 21.1718 12.0833 20.1299 12.0833 19.0419C12.0833 14.8745 15.0817 11.4087 19.0387 10.6819Z" fill="#1E73BE"/>
                <path d="M53.8116 14.5636C53.8116 16.4036 53.4628 17.9689 52.7653 19.2597C52.0732 20.5504 51.1285 21.5363 49.9312 22.2173C48.7393 22.8929 47.3992 23.2307 45.9107 23.2307C44.4113 23.2307 43.0657 22.8902 41.8738 22.2091C40.6819 21.528 39.74 20.5421 39.048 19.2514C38.3559 17.9607 38.0099 16.3981 38.0099 14.5636C38.0099 12.7237 38.3559 11.1583 39.048 9.86761C39.74 8.57689 40.6819 7.59375 41.8738 6.91818C43.0657 6.23712 44.4113 5.89659 45.9107 5.89659C47.3992 5.89659 48.7393 6.23712 49.9312 6.91818C51.1285 7.59375 52.0732 8.57689 52.7653 9.86761C53.4628 11.1583 53.8116 12.7237 53.8116 14.5636ZM50.1948 14.5636C50.1948 13.3718 50.0163 12.3667 49.6593 11.5483C49.3078 10.7299 48.8107 10.1093 48.1681 9.68636C47.5255 9.26345 46.773 9.05199 45.9107 9.05199C45.0484 9.05199 44.296 9.26345 43.6533 9.68636C43.0107 10.1093 42.5109 10.7299 42.1539 11.5483C41.8024 12.3667 41.6266 13.3718 41.6266 14.5636C41.6266 15.7555 41.8024 16.7606 42.1539 17.579C42.5109 18.3973 43.0107 19.018 43.6533 19.4409C44.296 19.8638 45.0484 20.0753 45.9107 20.0753C46.773 20.0753 47.5255 19.8638 48.1681 19.4409C48.8107 19.018 49.3078 18.3973 49.6593 17.579C50.0163 16.7606 50.1948 15.7555 50.1948 14.5636ZM56.0982 27.7455V10.3455H59.5584V12.471H59.715C59.8688 12.1305 60.0912 11.7845 60.3823 11.433C60.6789 11.0759 61.0634 10.7794 61.5357 10.5432C62.0136 10.3015 62.6067 10.1807 63.3153 10.1807C64.238 10.1807 65.0893 10.4223 65.8692 10.9057C66.6492 11.3835 67.2726 12.1058 67.7394 13.0724C68.2063 14.0336 68.4397 15.2392 68.4397 16.6892C68.4397 18.1008 68.2118 19.2926 67.7559 20.2648C67.3055 21.2314 66.6904 21.9647 65.9104 22.4645C65.136 22.9588 64.2682 23.206 63.307 23.206C62.626 23.206 62.0465 23.0934 61.5687 22.8682C61.0963 22.643 60.7091 22.3601 60.407 22.0196C60.1049 21.6736 59.8743 21.3248 59.715 20.9733H59.6079V27.7455H56.0982ZM59.5337 16.6727C59.5337 17.4252 59.6381 18.0815 59.8468 18.6418C60.0555 19.202 60.3576 19.6386 60.753 19.9517C61.1485 20.2593 61.6291 20.4131 62.1948 20.4131C62.766 20.4131 63.2494 20.2565 63.6448 19.9435C64.0403 19.6249 64.3396 19.1855 64.5428 18.6253C64.7515 18.0596 64.8559 17.4087 64.8559 16.6727C64.8559 15.9422 64.7543 15.2996 64.5511 14.7449C64.3478 14.1902 64.0485 13.7563 63.653 13.4432C63.2576 13.1301 62.7715 12.9736 62.1948 12.9736C61.6236 12.9736 61.1403 13.1246 60.7448 13.4267C60.3548 13.7288 60.0555 14.1572 59.8468 14.7119C59.6381 15.2667 59.5337 15.9203 59.5337 16.6727ZM78.6045 17.6119V10.3455H82.1142V23H78.7446V20.7014H78.6128C78.3272 21.4429 77.8521 22.0388 77.1875 22.4892C76.5284 22.9396 75.7237 23.1648 74.7736 23.1648C73.9277 23.1648 73.1835 22.9725 72.5409 22.5881C71.8983 22.2036 71.3957 21.6571 71.0332 20.9486C70.6762 20.2401 70.495 19.3915 70.4895 18.4028V10.3455H73.9991V17.7767C74.0046 18.5237 74.2051 19.1141 74.6005 19.548C74.996 19.9819 75.526 20.1989 76.1906 20.1989C76.6135 20.1989 77.009 20.1027 77.377 19.9105C77.745 19.7128 78.0416 19.4217 78.2667 19.0372C78.4974 18.6527 78.61 18.1777 78.6045 17.6119ZM95.1605 13.954L91.9474 14.1517C91.8925 13.8771 91.7744 13.6299 91.5931 13.4102C91.4119 13.185 91.173 13.0065 90.8764 12.8747C90.5853 12.7374 90.2365 12.6688 89.8301 12.6688C89.2863 12.6688 88.8277 12.7841 88.4542 13.0148C88.0807 13.24 87.894 13.542 87.894 13.921C87.894 14.2231 88.0148 14.4785 88.2565 14.6872C88.4982 14.8959 88.9128 15.0634 89.5005 15.1898L91.7909 15.6511C93.0212 15.9038 93.9384 16.3102 94.5426 16.8705C95.1467 17.4307 95.4488 18.1667 95.4488 19.0784C95.4488 19.9078 95.2044 20.6355 94.7156 21.2616C94.2323 21.8878 93.5677 22.3766 92.7218 22.7281C91.8815 23.0741 90.9121 23.2472 89.8136 23.2472C88.1384 23.2472 86.8038 22.8984 85.8096 22.2009C84.821 21.4978 84.2415 20.5421 84.0713 19.3338L87.5233 19.1526C87.6276 19.6634 87.8803 20.0533 88.2812 20.3224C88.6822 20.5861 89.1957 20.7179 89.8218 20.7179C90.437 20.7179 90.9313 20.5998 91.3048 20.3636C91.6838 20.122 91.876 19.8116 91.8815 19.4327C91.876 19.1141 91.7414 18.8532 91.4778 18.65C91.2142 18.4413 90.8077 18.282 90.2585 18.1722L88.067 17.7355C86.8312 17.4884 85.9112 17.0599 85.3071 16.4503C84.7084 15.8406 84.4091 15.0634 84.4091 14.1188C84.4091 13.3059 84.6288 12.6056 85.0681 12.0179C85.513 11.4302 86.1364 10.9771 86.9383 10.6585C87.7457 10.34 88.6904 10.1807 89.7724 10.1807C91.3707 10.1807 92.6285 10.5185 93.5457 11.194C94.4684 11.8696 95.0067 12.7896 95.1605 13.954Z" fill="#0F172A"/>
              </svg>
            </div>
            <hr />
            <div className="sidebarMenu">
              <p className="menuTitle">MENU</p>
              <div>
                <a href="#">
                  <i className="ri-apps-2-fill"></i>
                  <p>Dashboard</p>
                </a>
              </div>
              <div>
                <a href="#">
                  <i className="ri-checkbox-line"></i>
                  <p>Mes rendez-vous</p>
                </a>
              </div>
              <div>
                <a href="#">
                  <i className="ri-chat-voice-line"></i>
                  <p>Les Employés</p>
                </a>
              </div>
            </div>
            <hr />
          </div>
          <div className="sidebarMenu">
            <hr className="lastHr" />
            <a>
              <i className="ri-settings-4-line"></i>
              <p>Settings</p>
            </a>
          </div>
        </SideBar>
        <section className="headerAndContent">
          <Header>
            <div>
              <h1>Dashboard</h1>
            </div>
            <div className="rightElements">
              <div>
                <input type="text" placeholder="Search..." />
              </div>
              <i className="ri-notification-2-line"></i>
              <button className="profileBtn">
                <img src="https://thispersondoesnotexist.com/" />
                <div className="idAndBtn">
                  <div className="userId">
                    <p className="name">Angela L.</p>
                    <p>Project Manager</p>
                  </div>
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </button>
            </div>
          </Header>
          <DashboardContent>
            <DataBlock className="allMeets">
              <div className="rdvDisplayList">
                <div className="titleRdv">
                  <h1>Tous mes RDV</h1>
                  <div className="titleRdvDate">
                    <p>Dec 20 - Dec 31</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3.33301H3.99999C3.26361 3.33301 2.66666 3.92996 2.66666 4.66634V12.6663C2.66666 13.4027 3.26361 13.9997 3.99999 13.9997H12C12.7364 13.9997 13.3333 13.4027 13.3333 12.6663V4.66634C13.3333 3.92996 12.7364 3.33301 12 3.33301Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.6667 2V4.66667" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5.33331 2V4.66667" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2.66666 7.33301H13.3333" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7.33331 10H7.99998" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8 10V12" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
              </div>
              <a href="#" className="seeAll">
                See All
              </a>
            </SecondDataBlock>
          </DashboardContent>
        </section>
      </MainPage>
  );
}
