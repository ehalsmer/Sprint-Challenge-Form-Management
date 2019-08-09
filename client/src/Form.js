import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import User from "./User";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { Container, Card, Header } from "semantic-ui-react";

function RegistrationForm({ values, errors, touched, status }) {
  //   const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     if (status) {
  //       setUsers([...users, status]);
  //     }
  //   }, [status]);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (status) {
      setRecipes(status);
    }
  }, [status]);

  return (
    <div>
      {status ? (
        <div />
      ) : (
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && <p>{errors.password}</p>}
          <button>Submit</button>
        </Form>
      )}

      {/* {users.map(user => (
        <User username={user.username} />
      ))} */}
      <Container textAlign="center">
        {status && <Header as="h2">My Recipes</Header>}
        <Card.Group itemsPerRow="3" stackable centered>
          {recipes.map(recipe => (
            <RecipeCard
              name={recipe.name}
              course={recipe.course}
              technique={recipe.technique}
              ingredients={recipe.ingredients}
            />
          ))}
        </Card.Group>
      </Container>
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
    axios
      .post("http://localhost:5000/api/register", {
        username: values.username,
        password: values.password
      })
      .then(response => {
        console.log("RESPONSE", response);
        axios
          .get("http://localhost:5000/api/restricted/data")
          .then(response => {
            console.log("DATA RETRIEVED", response);
            setStatus(response.data);
          });
      });
  }
})(RegistrationForm);

export default FormikForm;
