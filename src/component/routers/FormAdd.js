import { Fragment, useRef } from "react";
import { Button, Form } from "react-bootstrap";

const FormAdd = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const form = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneRef: phoneRef.current.value,
    };
    props.onAddForm(form);
  };

  return (
    <Fragment>
      <Form className="m-5" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" ref={nameRef} />
          <Form.Text className="text-muted">
            Please Enter Your Full Name Here.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Phone Number" ref={phoneRef} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default FormAdd;
