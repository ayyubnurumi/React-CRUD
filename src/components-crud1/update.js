import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export const Update = () => {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    checkbox: false,
  });

  useEffect(() => {
    const get = JSON.parse(localStorage.getItem("data"));
    setId(get.id);
    setData((d) => ({
      firstName: get.firstName,
      lastName: get.lastName,
      checkbox: get.checkbox,
    }));
  }, [setData]);

  const updateData = () => {
    axios
      .put(`https://639ec2db5eb8889197ec8259.mockapi.io/fakeData/${id}`, data)
      .then(() => {
        localStorage.removeItem("data");
        navigate("/read");
      });
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          value={data.firstName}
          onChange={(e) => setData({ ...data, firstName: e.target.value })}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          value={data.lastName}
          onChange={(e) => setData({ ...data, lastName: e.target.value })}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          checked={data.checkbox}
          onChange={() => setData({ ...data, checkbox: !data.checkbox })}
        />
      </Form.Field>
      <Button type="submit" onClick={updateData}>
        Submit
      </Button>
    </Form>
  );
};
