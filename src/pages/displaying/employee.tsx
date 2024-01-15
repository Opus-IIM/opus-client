import React, { useEffect, useState } from "react";
import redaxios from "redaxios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.li`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const EmployeeDetails = styled.div`
  border: 1px solid #000;
  padding: 10px;
`;

export default function DisplayEmployee() {
  const [data, setData] = useState<
    {
      id: number;
      attributes: { Name: string; Lastname: string; Email: string };
    }[]
  >([]);
  type Employee = {
    id: number;
    attributes: { Name: string; Lastname: string; Email: string };
  };

  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );

  useEffect(() => {
    redaxios
      .get("http://localhost:1337/api/employees")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleEmployeeClick = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <Container>
      <ul>
        {data.map((item) => (
          <li key={item.id} onClick={() => handleEmployeeClick(item)}>
            <ListItem>
              {item.attributes.Name} {item.attributes.Lastname} -{" "}
              {item.attributes.Email}
            </ListItem>
            {selectedEmployee && selectedEmployee.id === item.id && (
              <EmployeeDetails>
                <h2>
                  <u>Details de l&apos;employee :</u>
                </h2>
                <p>
                  <u>Name:</u> {selectedEmployee.attributes.Name}
                </p>
                <p>
                  <u>Lastname:</u> {selectedEmployee.attributes.Lastname}
                </p>
                <p>
                  <u>Email:</u> {selectedEmployee.attributes.Email}
                </p>
              </EmployeeDetails>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
}
