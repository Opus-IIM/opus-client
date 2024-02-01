import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import styled from "styled-components";

const MainPage = styled.div`
  display: flex;

  h1 {
    font-size: 1.5rem;
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
      font-size: 1.25rem;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2fr repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  background-color: #f8f9fa;
  padding: 2rem;
  justify-items: center;
  height: 85.05vh;

  .employeeStatus {
    grid-area: 1 / 1 / 2 / 2;
  }

  .reconversionSucceed {
    grid-area: 2 / 1 / 3 / 2;
  }

  .reconversionInProgress {
    grid-area: 3 / 1 / 4 / 2;
  }

  .employeeRdvs {
    grid-area: 1 / 2 / 2 / 3;
  }

  .reconversionFailed {
    grid-area: 2 / 2 / 3 / 3;
  }

  .reconversionElegibility {
    grid-area: 3 / 2 / 4 / 3;
  }

  .calendar {
    grid-area: 1 / 3 / 2 / 4;

    .css-1q04gal-MuiDateCalendar-root {
      padding: 1rem 0;
      width: 100%;
      height: 100%;
    }

    .css-i5q14k-MuiDayCalendar-header {
      justify-content: space-between;
    }

    .css-nk89i7-MuiPickersCalendarHeader-root {
      padding-left: 0;
      padding-right: 0;
      padding: 0px 0 1rem 0.5rem;
      margin: 0;
      border-bottom: 2px solid #f8f9fa;
    }

    .css-dplwbx-MuiPickersCalendarHeader-label {
      font-weight: bold;
    }

    .css-flbe84-MuiDayCalendar-weekContainer {
      justify-content: space-between;
    }
  }

  .rdvsList {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: 2 / 3 / 4 / 4;

    hr {
      margin: 0 0 0.5rem 0;
    }

    .rdvDisplayList {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .title {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .rdvs {
        gap: 0.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .seeAll {
      text-align: center;
      text-decoration: none;
      color: #000000;
      font-weight: bold;
      font-size: 1rem;
      margin: 0.5rem 0 0 0;
    }
  }
`;

const DataBlock = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.5rem;
  width: 85%;

  .category {
    font-weight: bold;
    color: #64748b;
  }

  .rfidAndFull {
    display: flex;
    justify-content: space-between;
    .rfid {
      color: #f6a723;
      background-color: #fffbeb;
      border-radius: 1rem;
      padding: 1rem;
      i {
        font-size: 1.5rem;
      }
    }
    .full {
      padding: 0.5rem;

      :hover {
        cursor: pointer;
      }
    }
  }

  .data {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    .percentage {
      color: #24d164;
      background-color: #f0fdf4;
      border-radius: 1rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.9rem;
    }
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

export default function Dashboard() {
  return (
    <MainPage>
      <SideBar>
        <div>
          <div>
            <h1 className="appName">Opus</h1>
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
          <DataBlock className="employeeStatus">EmployeeStatus</DataBlock>
          <DataBlock className="employeeRdvs">EmployeeRdvs</DataBlock>
          <DataBlock className="calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </DataBlock>
          <DataBlock className="reconversionSucceed">
            <div className="rfidAndFull">
              <div className="rfid">
                <i className="ri-rfid-line"></i>
              </div>
              <div className="full">
                <i className="ri-fullscreen-line"></i>
              </div>
            </div>
            <p className="category">Reconversion réussie</p>
            <div className="data">
              <h1>234</h1>
              <p className="percentage">
                <i className="ri-arrow-up-line"></i>59%
              </p>
            </div>
          </DataBlock>
          <DataBlock className="reconversionFailed">
            <div className="rfidAndFull">
              <div className="rfid">
                <i className="ri-rfid-line"></i>
              </div>
              <div className="full">
                <i className="ri-fullscreen-line"></i>
              </div>
            </div>
            <p className="category">Reconversion en échec</p>
            <div className="data">
              <h1>21</h1>
              <p className="percentage">
                <i className="ri-arrow-up-line"></i>5%
              </p>
            </div>
          </DataBlock>
          <DataBlock className="reconversionInProgress">
            <div className="rfidAndFull">
              <div className="rfid">
                <i className="ri-rfid-line"></i>
              </div>
              <div className="full">
                <i className="ri-fullscreen-line"></i>
              </div>
            </div>
            <p className="category">En cours de reconversion</p>
            <div className="data">
              <h1>41</h1>
              <p className="percentage">
                <i className="ri-arrow-up-line"></i>80%
              </p>
            </div>
          </DataBlock>
          <DataBlock className="reconversionElegibility">
            <div className="rfidAndFull">
              <div className="rfid">
                <i className="ri-rfid-line"></i>
              </div>
              <div className="full">
                <i className="ri-fullscreen-line"></i>
              </div>
            </div>
            <p className="category">Éligible à la reconversion</p>
            <div className="data">
              <h1>542</h1>
              <p className="percentage">
                <i className="ri-arrow-up-line"></i>25%
              </p>
            </div>
          </DataBlock>
          <DataBlock className="rdvsList">
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
          </DataBlock>
        </DashboardContent>
      </section>
    </MainPage>
  );
}
