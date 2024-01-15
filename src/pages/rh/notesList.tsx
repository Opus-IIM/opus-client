import React, { useEffect, useState } from "react";
import redaxios from "redaxios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLi = styled.li`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid black;
`;

const Separator = styled.hr`
  margin: 1rem 0;
  background-color: black;
  height: 0.025rem;
  border: none;
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
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        Employee: {
          data: {
            id: number;
            attributes: {
              Name: string;
              Lastname: string;
              Function: string;
              Email: string;
            };
          };
        };
        Author: {
          data: {
            id: number;
            attributes: {
              Name: string;
              Lastname: string;
              Email: string;
            };
          };
        };
        Rdv: {
          data: {
            id: number;
            attributes: {
              Date: string;
              Status: boolean;
            };
          };
        };
      };
    }[]
  >([]);

  useEffect(() => {
    redaxios
      .get("http://localhost:1337/api/notes?populate=*")
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
          <StyledLi key={item.id}>
            <p>
              Date of Interview:{" "}
              {new Date(
                item.attributes.Rdv.data.attributes.Date,
              ).toLocaleDateString("fr-FR")}
            </p>
            <p>
              Interviewer: {item.attributes.Author.data.attributes.Name}{" "}
              {item.attributes.Author.data.attributes.Lastname}
            </p>
            <p>
              Employee Name: {item.attributes.Employee.data.attributes.Name}{" "}
              {item.attributes.Employee.data.attributes.Lastname}
            </p>
            <Separator />
            {item.attributes.Content.map((contentItem) =>
              contentItem.children.map((child) => (
                <p key={child.text}>{child.text}</p>
              )),
            )}
          </StyledLi>
        ))}
      </ul>
    </Container>
  );
}
