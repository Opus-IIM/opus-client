import React, { useEffect, useRef } from "react";
import { getHumanRessourcesLayout } from "@layouts/getLayouts";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CustomNextPage } from "@typesDef/APP";
import { Chart, ChartConfiguration } from "chart.js/auto";
import styled from "styled-components";

const data = {
  labels: [`Neutre (${423})`, `A surveiller (${174})`, `Urgents (${300})`],
  datasets: [
    {
      label: "Agents",
      data: [423, 174, 300],
      backgroundColor: [
        "rgb(39, 201, 63)",
        "rgb(255, 189, 46)",
        "rgb(255, 95, 86)",
      ],
    },
  ],
};

const config: ChartConfiguration<"doughnut", number[], string> = {
  type: "doughnut",
  data: data,
  options: {
    maintainAspectRatio: true,
    aspectRatio: 1,
  },
};

const DashboardDemo: CustomNextPage = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = new Chart(
        chartRef.current.getContext("2d") as CanvasRenderingContext2D,
        config,
      );
      return () => myChart.destroy();
    }
  }, []);

  return (
    <MainPage>
      <DashboardContent>
        <DataBlock className="employeeStatus">
          <div className="statusData">
            <div className="statTitle">
              <h1>États des agents</h1>
              <i className="ri-error-warning-line"></i>
            </div>
            <div className="statusData">
              <StyledCanvas id="myChart" ref={chartRef} />
            </div>
          </div>
        </DataBlock>
        <DataBlock className="employeeRdvs">
          <div className="agentRdvs">
            <div className="title">
              <h1>RDV Agents</h1>
              <i className="ri-more-line"></i>
            </div>
            <div className="agentData">
              <div className="passe">
                <div className="icon">
                  <i className="ri-bubble-chart-line"></i>
                </div>
                <div>
                  <p>Passé</p>
                  <h1>40</h1>
                </div>
              </div>
              <div className="enAttente">
                <div className="icon">
                  <i className="ri-user-follow-line"></i>
                </div>
                <div>
                  <p>En attente</p>
                  <h1>79</h1>
                </div>
              </div>
              <div className="sansRdv">
                <div className="icon">
                  <i className="ri-checkbox-line"></i>
                </div>
                <div>
                  <p className="grayed">Sans RDV</p>
                  <h1>89</h1>
                </div>
              </div>
            </div>
            <div className="valuesAndGraph">
              <div>
                <p className="grayed">Agent avec 1 RDV ou +</p>
                <div className="data">
                  <h1>95%</h1>
                  <p className="percentage">+2,5%</p>
                </div>
              </div>
              <div>
                <i className="ri-bar-chart-box-line"></i>
              </div>
            </div>
          </div>
        </DataBlock>
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
                <img src="https://randomuser.me/api/portraits/women/19.jpg" />
                <div className="agentAndDate">
                  <p className="agent">Andreana Viola</p>
                  <p className="date">12/05/23 - 08:30</p>
                </div>
              </Rdv>
              <hr />
              <Rdv>
                <img src="https://randomuser.me/api/portraits/men/25.jpg" />
                <div className="agentAndDate">
                  <p className="agent">Jonathan Data</p>
                  <p className="date">27/04/23 - 11:25</p>
                </div>
              </Rdv>
              <hr />
              <Rdv>
                <img src="https://randomuser.me/api/portraits/men/69.jpg" />
                <div className="agentAndDate">
                  <p className="agent">Filipo Pipo</p>
                  <p className="date">11/06/23 - 16:40</p>
                </div>
              </Rdv>
            </div>
          </div>
          <a href="#" className="seeAll">
            See All
          </a>
        </DataBlock>
      </DashboardContent>
    </MainPage>
  );
};

export default DashboardDemo;

DashboardDemo.getLayout = getHumanRessourcesLayout;

const MainPage = styled.div`
  display: flex;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  hr {
    border: 2px solid #f8f9fa;
    width: 100%;
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
  width: 100%;

  .employeeStatus {
    grid-area: 1 / 1 / 2 / 2;
    height: 25rem;

    .statusData {
      padding: 1rem 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .statTitle {
        justify-content: center;
        display: flex;
        gap: 0.5rem;
        align-items: center;

        i:hover {
          cursor: pointer;
        }
      }

      .statAndValue {
        display: flex;
        justify-content: space-between;
      }

      .child {
        gap: 0.5rem;

        .status {
          color: #64748b;
        }

        .statValue {
          font-weight: bold;
        }
      }
    }
  }

  .reconversionSucceed {
    grid-area: 2 / 1 / 3 / 2;
  }

  .reconversionInProgress {
    grid-area: 3 / 1 / 4 / 2;
  }

  .employeeRdvs {
    grid-area: 1 / 2 / 2 / 3;

    .agentRdvs {
      justify-content: space-between;
      flex-direction: column;
      padding: 1rem 0;
      display: flex;
      height: 100%;
      gap: 1.5rem;

      .grayed {
        color: #64748b;
      }

      .title {
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: space-between;

        i:hover {
          cursor: pointer;
        }
      }

      .agentData {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin: 1rem 0 0 0;

        div {
          justify-content: space-between;
          flex-direction: column;
          border-radius: 0.5rem;
          text-align: center;
          padding: 1rem 0;
          color: #ffffff;
          display: flex;
          width: 100%;

          .icon {
            display: flex;
            align-items: center;

            i {
              border: 2px solid #ffffff;
              border-radius: 100%;
              font-size: 1.5rem;
              padding: 1rem 0.5rem;
              width: 3rem;
            }
          }
        }

        .passe {
          background-color: #2563eb;
        }

        .enAttente {
          background-color: #38bdf8;
        }

        .sansRdv {
          background-color: #f8fafc;

          i {
            border: 2px solid #cbd5e1 !important;
          }

          i,
          h1 {
            color: #000000;
          }
        }
      }

      .valuesAndGraph {
        justify-content: space-between;
        align-items: center;
        display: flex;

        i {
          font-size: 2rem;
          padding: 1rem;
        }

        i:hover {
          cursor: pointer;
        }
      }
    }
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
  padding: 0.75rem 1.5rem;
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

const StyledCanvas = styled.canvas`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0.5rem;
  width: 90% !important;
  height: 90% !important;
`;
