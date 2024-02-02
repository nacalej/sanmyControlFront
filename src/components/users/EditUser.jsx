import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { updateUser } from "../../actions";


const EditUser = ({ theUser }) => {
  const dispatch = useDispatch();

  //Alert


  const idUser = theUser.id;
  const [lastName, setLastName] = useState(
    theUser.lastName
  );

  const [macAddress, setMacAddress] = useState(
    theUser.macAddress
  );
const [input, setInput] = useState({
  /* input = estado local */
  lastName: lastName,
  id: idUser,
  macAddress: macAddress
});




function handleChange(e) {
  // console.log("===== LASTNAME INPUT ==== ", input);
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });
}

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(updateUser(input));
  setInput({
    lastName: "",
    id: "",
  });

};
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"  defaultValue={theUser.name} readOnly  />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          rows={3}
          name="lastName"
          value={input.lastName}
          defaultValue={theUser.lastName}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Dirección MAC</Form.Label>
        <Form.Control
          type="text"
          rows={3}
          name="macAddress"
          value={input.macAddress}
          defaultValue={theUser.macAddress}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>

      <Button  variant="success" type="submit" block className="mt-2">
        Editar usuario
      </Button>
    </Form>
  );
};

export default EditUser;
