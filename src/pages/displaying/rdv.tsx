import React, { useEffect, useState } from "react";
import redaxios from "redaxios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function DisplayRdv() {
  const [data, setData] = useState<
    {
      id: number;
      attributes: {
        Date: string;
        Status: boolean;
      };
    }[]
  >([]);

  useEffect(() => {
    redaxios
      .get("http://localhost:1337/api/rdvs")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.attributes.Date} - {item.attributes.Status.toString()}
          </li>
        ))}
      </ul>
    </Container>
  );
}
