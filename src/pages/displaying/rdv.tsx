import React, { useEffect, useState } from "react";
import redaxios from "redaxios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RdvDetail = styled.li`
  border: 1px solid #000;
  padding: 1rem;
  margin: 1rem;
`;

export default function DisplayRdv() {
  const [data, setData] = useState<
    {
      id: number;
      attributes: {
        Date: string;
        Status: boolean;
        createdAt: string;
        updatedAt: string;
        Employee: {
          data: {
            attributes: {
              Name: string;
              Lastname: string;
              Function: string;
              Email: string;
            };
          };
        };
        Humanresource: {
          data: {
            attributes: {
              Name: string;
              Lastname: string;
              Email: string;
            };
          };
        };
      };
    }[]
  >([]);

  useEffect(() => {
    redaxios
      .get("http://localhost:1337/api/rdvs?populate=*")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getStatusText = (status: boolean) => {
    return status ? "RDV terminé ✅" : "RDV non encore fait ⚠️";
  };

  return (
    <Container>
      <ul>
        {data.map((item) => (
          <RdvDetail key={item.id}>
            {formatDate(item.attributes.Date)}
            <br />
            {getStatusText(item.attributes.Status)}
            <br />
            <p>
              <u>Interviewer:</u>{" "}
              {item.attributes.Humanresource.data.attributes.Name}{" "}
              {item.attributes.Humanresource.data.attributes.Lastname}
            </p>
            <p>
              <u>Employee:</u> {item.attributes.Employee.data.attributes.Name}{" "}
              {item.attributes.Employee.data.attributes.Lastname}
            </p>
          </RdvDetail>
        ))}
      </ul>
    </Container>
  );
}
