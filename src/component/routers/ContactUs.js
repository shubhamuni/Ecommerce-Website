import { Fragment } from "react";
import { Container } from "react-bootstrap";
import FormAdd from "./FormAdd";
import classes from "./../Layout/Header.module.css";

const ContactUs = () => {
  async function addFormHandler(form) {
    try {
      const response = await fetch(
        "https://react-api-8342e-default-rtdb.firebaseio.com/form.json",
        {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.timeLog(error);
    }
  }
  return (
    <Fragment>
      <div className={classes.headline}>
        <Container className="p-1">The Generics</Container>
      </div>
      <FormAdd onAddForm={addFormHandler} />
    </Fragment>
  );
};

export default ContactUs;
