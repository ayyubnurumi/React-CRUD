import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    checkbox: false,
  });

  const postData = () => {
    axios.post('https://639ec2db5eb8889197ec8259.mockapi.io/fakeData', data).then(()=>navigate('/read'))
}

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" onChange={(e) => setData({...data, firstName: e.target.value})} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" onChange={(e) => setData({...data, lastName: e.target.value})} />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" onChange={() => setData({...data, checkbox: !data.checkbox})} />
      </Form.Field>
      <Button type="submit" onClick={postData}>Submit</Button>
    </Form>
  );
};
