import React from "react";
import Box from "@mui/material/Box";
import { DefaultizedPieValueType } from "@mui/x-charts";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from "@mui/x-data-grid";
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

  .HeaderAndContent {
    width: 85vw;
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

  hr {
    border: 2px solid #f8f9fa;
    width: 100%;
    margin: 2rem 0rem 1.5rem 0rem;
  }

  .SidebarMenu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      background-color: transparent;
      border: none;
      margin-top: 0.5rem;
      align-items: center;
      display: flex;
      gap: 0.5rem;
      width: 100%;
      font-size: 1.25rem;
      color: black;

      &:hover {
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

  .RightElements {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    input {
      width: 20rem;
      height: 2rem;
      border-radius: 0.5rem;
      border: 2px solid #f8f9fa;
      padding-left: 0.5rem;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: 1rem;

        &:hover {
            cursor: pointer;
        }
    }

    .ProfileBtn {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      .IdAndBtn {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .UserId {
        display: flex;
        align-items: flex-start;    
        flex-direction: column;

        .Name {
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

  .EmployeeStatus {
    grid-area: 1 / 1 / 2 / 2;
  }

  .ReconversionSucceed {
    grid-area: 2 / 1 / 3 / 2;
  }

  .ReconversionInProgress {
    grid-area: 3 / 1 / 4 / 2;
  }

  .EmployeeRdvs {
    grid-area: 1 / 2 / 2 / 3;
  }

  .ReconversionFailed {
    grid-area: 2 / 2 / 3 / 3;
  }

  .ReconversionElegibility {
    grid-area: 3 / 2 / 4 / 3;
  }

  .Calendar {
    padding-top: 1rem;
    grid-area: 1 / 3 / 2 / 4;
  }

  .RdvsList {
    grid-area: 2 / 3 / 4 / 4;
  }
`;

const DataBlock = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 85%;
`;

const data = [
  { label: "Urgent", value: 8, color: "#FF0000" },
  { label: "A surveiller", value: 12, color: "#FFBB28" },
  { label: "Neutre", value: 23, color: "#0088FE" },
];

const sizing = {
  margin: { right: 0 },
  width: 425,
  height: 325,
  legend: { hidden: false },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function Dashboard() {
  return (
    <MainPage>
      <SideBar>
        <div>
          <h1>Opus</h1>
          <hr />
          <div className="SidebarMenu">
            <p>Menu</p>
            <div>
              <a href="#">
                <p>🌐</p>Dashboard
              </a>
            </div>
            <div>
              <a href="#">
                <p>📝</p>RDV
              </a>
            </div>
            <div>
              <a href="#">
                <p>💼</p>
                Employees
              </a>
            </div>
          </div>
          <hr />
        </div>
        <div className="SidebarMenu">
          <hr />
          <a>
            <p>⚙️</p>
            Settings
          </a>
        </div>
      </SideBar>
      <section className="HeaderAndContent">
        <Header>
          <div>
            <h1>Dashboard</h1>
          </div>
          <div className="RightElements">
            <div>
              <input type="text" placeholder="Search..." />
            </div>
            <button>🔔</button>
            <button className="ProfileBtn">
              <img src="https://thispersondoesnotexist.com/" />
              <div className="IdAndBtn">
                <div className="UserId">
                  <p className="Name">Angela L.</p>
                  <p>Project Manager</p>
                </div>
                <p>🔽</p>
              </div>
            </button>
          </div>
        </Header>
        <DashboardContent>
          <DataBlock className="EmployeeStatus">
            <PieChart
              series={[
                {
                  outerRadius: 80,
                  data,
                  arcLabel: getArcLabel,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontSize: 14,
                },
              }}
              {...sizing}
            />
          </DataBlock>
          <DataBlock className="EmployeeRdvs">
            <div></div>
          </DataBlock>
          <DataBlock className="Calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </DataBlock>
          <DataBlock className="ReconversionSucceed">
            ReconversionSucceed
          </DataBlock>
          <DataBlock className="ReconversionFailed">
            ReconversionFailed
          </DataBlock>
          <DataBlock className="ReconversionInProgress">
            ReconversionInProgress
          </DataBlock>
          <DataBlock className="ReconversionElegibility">
            ReconversionElegibility
          </DataBlock>
          <DataBlock className="RdvsList">
            <Box sx={{ height: 365, width: "100%" }}>
              <DataGrid
                columns={[{ field: "username" }, { field: "job" }]}
                rows={[
                  {
                    id: 1,
                    username: "jean-michel@demo.com",
                    job: "comptable",
                  },
                  {
                    id: 2,
                    username: "marie-claire@demo.com",
                    job: "infirmière",
                  },
                  {
                    id: 3,
                    username: "pierre@demo.com",
                    job: "policier",
                  },
                  {
                    id: 4,
                    username: "sophie@demo.com",
                    job: "enseignante",
                  },
                  {
                    id: 5,
                    username: "luc@demo.com",
                    job: "pompier",
                  },
                  {
                    id: 6,
                    username: "antoine@demo.com",
                    job: "militaire",
                  },
                  {
                    id: 7,
                    username: "claire@demo.com",
                    job: "médecin",
                  },
                ]}
              />
            </Box>
          </DataBlock>
        </DashboardContent>
      </section>
    </MainPage>
  );
}
