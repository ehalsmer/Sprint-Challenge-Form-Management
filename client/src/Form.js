import React from "react";
import { withFormik, Form, Field } from "formik";

function RegistrationForm() {
  return (
    <Form>
      <Field type="text" name="username" placeholder="Username" />
      <Field type="password" name="password" placeholder="Password" />
      <button>Submit!</button>
    </Form>
  );
}

  const FormikForm = withFormik({
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
  
    handleSubmit(values) {
      console.log(values);
      //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    }
  })(RegistrationForm);
  

export default FormikForm;