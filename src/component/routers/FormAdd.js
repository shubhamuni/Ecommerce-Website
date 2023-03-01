import { Fragment, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormAdd = (props) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const form = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    props.onAddForm(form);
    setInputValues({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <Fragment>
      <Form className="m-5" onSubmit={submitHandler} id="myform">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            ref={nameRef}
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            Please Enter Your Full Name Here.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Phone Number"
            ref={phoneRef}
            name="phone"
            value={inputValues.phone}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default FormAdd;
