import React, { useEffect, useState } from "react";
import redaxios from "redaxios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function TestStrapi() {
  const [data, setData] = useState<
    {
      id: number;
      attributes: { Name: string; Lastname: string; Email: string };
    }[]
  >([]);

  useEffect(() => {
    redaxios
      .get("http://localhost:1337/api/humanresources")
      .then((res) => {
        // Assuming the response data is in res.data.data
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
            {item.attributes.Name} {item.attributes.Lastname} -{" "}
            {item.attributes.Email}
          </li>
        ))}
      </ul>
    </Container>
  );
}
