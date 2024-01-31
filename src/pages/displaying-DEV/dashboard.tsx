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
  border: 1px solid black;
  padding: 0.5rem;
  width: 100%;
`;

export default function DisplayRh() {
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
          <Bordered>Employees with Rdv: {item.employeesWithRdv}</Bordered>
          <Bordered>Employees without Rdv: {item.employeesWithoutRdv}</Bordered>
          <Bordered>Rdvs Done: {item.rdvsDone}</Bordered>
          <Bordered>Rdvs Not Done: {item.rdvsNotDone}</Bordered>
          <Bordered>
            Statuses:
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
