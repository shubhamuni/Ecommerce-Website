import FormAdd from "./FormAdd";

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
  return <FormAdd onAddForm={addFormHandler} />;
};

export default ContactUs;
