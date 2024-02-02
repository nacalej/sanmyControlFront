import React, {useState} from 'react';
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { updateRental } from '../../actions';


const EditConnection = ({theConnection}) =>{
  const dispatch = useDispatch();
  const idProduct = theConnection.id;

  const [enDateRentalWifi, SetEnDateRentalWifi] = useState(theConnection.enDateRentalWifi);
  const [input, setInput] = useState({
    /* input = estado local */
    enDateRentalWifi: enDateRentalWifi,
    id: idProduct,
  });
  
   
  
  function handleChange(e) {
    console.log("este es el input", input);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRental(input));
    setInput({
      enDateRentalWifi: "",
      id: "",
    });
}

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
            <Form.Label>Tiempo</Form.Label>
                <Form.Control
                    type="text"                   
                    value={theConnection.time}
                    readOnly
                />
            </Form.Group>
            
            <Form.Group className="mb-2">
            <Form.Label>Monto</Form.Label>
                <Form.Control
                   type='text'
                    rows={3}                  
                    value={theConnection.amountRentalWifi}
                   readOnly
                />
            </Form.Group>

            <Form.Group className="mb-2">
            <Form.Label>Conectado desde</Form.Label>
                <Form.Control
                   type='text'
                    rows={3}                  
                    value={theConnection.dateRentalWifi}
                   readOnly
                />
            </Form.Group>

            <Form.Group className="mb-2 ">
            <Form.Label>Usuario conectado</Form.Label>
            <div className='d-sm-flex justify-content-sm-center align-items-center '>
                <Form.Control
                   type='text'
                    rows={1}                  
                    value={theConnection.nameUser}
                   readOnly
                />
                 <Form.Control
                   type='text'
                    rows={3}                  
                    value={theConnection.addressUser}
                   readOnly
                />
                </div>
            </Form.Group>

            <Form.Group className="mb-2 bg_input_EndDateRental">
            <Form.Label>Fecha de desconexión guardada:</Form.Label>
            <Form.Control
            className="mb-2"
                   type='text'
                    rows={2}                  
                    value={theConnection.enDateRentalWifi}
                   readOnly
                />
                  <Form.Label><strong>Editar fecha de desconexión</strong></Form.Label>
                <Form.Control
                    type='datetime-local'                    
                    rows={3}
                    name="enDateRentalWifi"
                    value={input.enDateRentalWifi}
                    defaultValue={theConnection.enDateRentalWifi}
                    onChange={(e)=> handleChange(e)}
                    required
                />
            </Form.Group>
         
            <Button variant="success" type="submit" block className='mt-2'>
                Editar conexión
            </Button>
        </Form>

     )
}

export default EditConnection;