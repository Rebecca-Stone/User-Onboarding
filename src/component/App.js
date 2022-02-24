//to use State & effects
import React, { useState, useEffect } from "react";
//to make GET and POST requests
import axios from "axios";
//this is to use the Form inside App
import Form from "./Form";
//this is to use Friend inside App
import User from "./User";
//the Shape of the stuff ???
import schema from "../validation/schema";
//?????
import * as yup from "yup";
//just a css rest
import "./styles/App.css";

//our initial form state
const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: "",
};

//our initial error state
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: "",
};

//initial sign up state
const initialSignUp = [];
//initial submit button state???
const initialDisabled = true;

function App() {
  //this slice of state is to keep track of users
  const [user, setUser] = useState(initialSignUp);
  //this slice of state is to keep track of values
  const [formValues, setFormValues] = useState(initialFormValues);
  //this slice of state is to keep track of errors
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  //this slice of state is to disable the submit???
  const [disabled, setDisabled] = useState(initialDisabled);


  //this is to take the values that we just received and post them to the api
  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUser([res.data, ...user]);
        setFormValues(initialFormValues);
      })
      .catch((err) => console.error(err));
  };

  //this is to make sure through yup that everything needed is added
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  //this is to validate the input changes??
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  //this is to submit, make and post a new user after creation
  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };

  //this is to change the setDisabled for the submit button???
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div>
      <Form
        //this are the props being passed to form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        //this will make a user appear after being made
        user.map((user, index) => {
          return (
            //I chose to just pass the index as the key
            <User key={index} details={user} />
          );
        })
      }
    </div>
  );
}

export default App;
