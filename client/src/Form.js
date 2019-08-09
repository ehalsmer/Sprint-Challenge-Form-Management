import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import User from "./User";
import axios from 'axios';

function RegistrationForm({ values, errors, touched, status }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
    <div>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <button>Submit!</button>
      </Form>
      {users.map(user => (
        <User username={user.username} />
      ))}
    </div>
  );
}

const FormikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(8)
      .required()
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    // console.log(values);
    // setStatus(values);
    axios.post('http://localhost:5000/api/register', {
        username: values.username,
        password: values.password
    })
    .then((response)=>{
        console.log('RESPONSE', response)
    })
  }
})(RegistrationForm);

export default FormikForm;
