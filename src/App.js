//to use State & effects
import React, { useState, useEffect } from "react";
//to make GET and POST requests
import axios from "axios";
//this is to use the Form inside App
import Form from "./component/Form";
//this is to use Friend inside App
import Friend from "./component/Friend";
//the Shape of the stuff ???
import schema from "./validation/schema";
//?????
import * as yup from "yup";
//just css
import "./App.css";

//our initial form state
const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: '',
};

//our initial error state
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

//initial sign up state
const initialSignUp = [];
//????
const initialDisabled = true;

function App() {
  const [friends, setFriends] = useState(initialSignUp);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getFriends = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  const postNewFriend = (newFriend) => {
    axios
      .post("https://reqres.in/api/users", newFriend)
      .then((res) => {
        setFriends([res.data, ...friends]);
        setFormValues(initialFormValues);
      })
      .catch((err) => console.error(err));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms.trim(),
    };
    postNewFriend(newFriend);
  };

  useEffect(() => {
    getFriends();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        friends.map((friend, index) => {
        return( 
          <Friend key={index} details={friend} />
        )
      })}
    </div>
  );
}

export default App;
