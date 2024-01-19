import React, { useEffect, useState } from "react";
import redaxios from "redaxios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function DisplayNote() {
  const [data, setData] = useState<
    {
      id: number;
      attributes: {
        Content: {
          type: string;
          children: { type: string; text: string }[];
        }[];
        Priority: number;
      };
    }[]
  >([]);

  useEffect(() => {
    redaxios
      .get("http://localhost:1337/api/notes")
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
            {item.attributes.Content[0].children[0].text} -{" "}
            {item.attributes.Priority.toString()}
          </li>
        ))}
      </ul>
    </Container>
  );
}
