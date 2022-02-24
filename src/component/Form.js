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
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "radio" ? checked : value;
    change(name, valueToUse);
  };


  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Join Our Team!</h2>
        

        <div>
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div>
        <h4>Sign Up Here</h4>
        <label>
          Username
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <label>
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>


{/* i'm having a hard time figuring out the checkboxes */}
        <h3>Terms and Conditions</h3>
        <label>
          Accept
          <input
            type="radio"
            onChange={onChange}
            value='YES'
            name="terms"
            checked={values.terms === 'YES'}
          />
        </label>
        <label>
          Decline
          <input
            type="radio"
            onChange={onChange}
            value='NO'
            name="terms"
            checked={values.terms === 'NO'}
          />
        </label>
      </div>
      <button disabled={disabled}>Submit</button>
    </form>
  )
}