import React from "react";
//using a septate styling sheet to keep files small
import "./styles/Form.css";

export default function User(props) {
  const { values, submit, change, disabled, errors } = props;

  //this prevents the page from reloading onSubmit
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  //this keeps track of the radio values???
  const onChange = (evt) => {
    const { name, value} = evt.target;
    const valueToUse =  value;
    change(name, valueToUse);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="header">
        <h2>Join Our Team!</h2>
        <h4>Sign Up Here</h4>
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div className="inputs">
        <label className="name">
          Username
          <input
            placeholder="Username"
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>

        <label className="email">
          Email
          <input
            placeholder="Email"
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <label className="password">
          Password
          <input
            placeholder="Password"
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>
      </div>

      {/* i'm having a hard time figuring out the checkboxes */}
      <div className="terms">
        <h3>Terms and Conditions</h3>
        <label>
          Accept
          <input
            type="radio"
            onChange={onChange}
            value="accept"
            name="terms"
            checked={values.terms === "accept"}
          />
        </label>
        <label>
          Decline
          <input
            type="radio"
            onChange={onChange}
            value="decline"
            name="terms"
            checked={values.terms === "decline"}
          />
        </label>
      </div>
      <div className="submit">
        <button disabled={disabled}>Submit</button>
      </div>
    </form>
  );
}
