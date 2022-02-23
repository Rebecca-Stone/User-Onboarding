import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Top</h2>
        <button disabled={disabled}>submit</button>

        <div>
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div>
        <h4>all the inputs</h4>
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
    </form>
  )
}

// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.
