import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

export const Read = () => {
  const navigate = useNavigate();
  const [APIData, setAPIData] = useState([]);

  const getData = () => {
    axios
      .get("https://639ec2db5eb8889197ec8259.mockapi.io/fakeData")
      .then((response) => setAPIData(response.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const onUpdate = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/update");
  };

  const onDelete = (id) => {
    axios
      .delete(`https://639ec2db5eb8889197ec8259.mockapi.io/fakeData/${id}`)
      .then(() => getData());
  };

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>first name</Table.HeaderCell>
          <Table.HeaderCell>last name</Table.HeaderCell>
          <Table.HeaderCell>checked</Table.HeaderCell>
          <Table.HeaderCell>update</Table.HeaderCell>
          <Table.HeaderCell>delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {APIData.map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.checkbox ? "Checked" : "Unchecked"}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => onUpdate(data)}>update</Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => onDelete(data.id)}>delete</Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
