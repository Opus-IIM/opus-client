import React, { useEffect, useState } from "react";
import redaxios from "redaxios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Gapped = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Bordered = styled.div`
  background-color: #f5f5f5;
  box-shadow: 0 0 5px 0px #000000;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 100%;
`;

export default function Dashboard() {
  const [data, setData] = useState<
    {
      employeesWithRdv: number;
      employeesWithoutRdv: number;
      rdvsDone: number;
      rdvsNotDone: number;
      sortedNotes: { Priority: number; status: string }[];
    }[]
  >([]);

  useEffect(() => {
    redaxios
      .get("http://localhost:1337/api/rh/dashboard")
      .then((res) => {
        const responseData = res.data.data;
        setData([responseData]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container>
      {data.map((item, index) => (
        <Gapped key={index}>
          <Bordered>
            Employees Counts:
            <div>
              <p>With Rdv: {item.employeesWithRdv}</p>
              <p>Without Rdv: {item.employeesWithoutRdv}</p>
            </div>
          </Bordered>
          <Bordered>
            Rdv Counts:
            <div>
              <p>Done: {item.rdvsDone}</p>
              <p>Not Done: {item.rdvsNotDone}</p>
            </div>
          </Bordered>
          <Bordered>
            Notes Counts:
            {Object.entries(
              item.sortedNotes.reduce(
                (acc: { [key: string]: number }, note) => {
                  acc[note.status] = (acc[note.status] || 0) + 1;
                  return acc;
                },
                { Urgent: 0, Neutral: 0, ToWatch: 0 },
              ),
            ).map(([status, count]) => (
              <div key={status}>
                <p>
                  {status}, Count: {count}
                </p>
              </div>
            ))}
          </Bordered>
        </Gapped>
      ))}
    </Container>
  );
}
