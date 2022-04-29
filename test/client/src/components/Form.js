import React from "react";
import { useState } from "react";

const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confPassword, setConfPassword] = useState("");

//   const handleChange = (e) => {
//     console.log(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     console.log(e.target.value);
//   };
//   const onsubmit = (e) => console.log(e.target.value

const [values, setValues] = useState({
    name: '',
    email_id: '',
    contact_number: '',
    age: "",
    error: '',
    success: false,
  });
  const { name, email_id, contact_number, age, error, success } = values;
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onSubmit = event => {
    event.preventDefault();
    // setValues({ ...values, error: false });
    console.log("Values", values);
    console.log("Clicked");
    // signup({ name, email, password })
    //   .then(data => {
    //     if (data.error) {
    //       setValues({ ...values, error: data.error, success: false });
    //     } else {
    //       setValues({
    //         ...values,
    //         name: '',
    //         email: '',
    //         password: '',
    //         error: '',
    //         success: true,
    //       });
    //     }
    //   })
    //   .catch(console.log('Error in signup'));
  };

  return (
    <div className="centered">
      <form action="">
          <h1>Form</h1>
        <label htmlFor="">
          Name<span>*</span>
        </label>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          onChange={handleChange("name")}
          value={name}
        />
        {/* <br />
        <br />
        <label htmlFor="">
          Last Name<span>*</span>
        </label>
        <input type="text" name="Name" placeholder="Last Name" /> */}
        <br />
        <br />
        <label htmlFor="">
          Email Id<span>*</span>
        </label>
        <input
          type="email"
          name="Email"
          placeholder="Email"
          onChange={handleChange("email_id")}
          value={email_id}
        />
        <br />
        <br />
        <label>
          Contact<span>*</span>
        </label>
        <input type="number" name="" required placeholder="" onChange={handleChange("contact_number")} value={contact_number} />
        <br />
        <br />
        <label>
          Age<span>*</span>
        </label>
        <input type="number" name="" required placeholder="" onChange={handleChange("age")} value={age} />
        <br />
        <br />
        {/* <input type="checkbox" id="" name="" value="" />I agree to the terms&condition */}
        <button className="register-btn" type="submit" value="Register" onClick={onSubmit}>Register</button>
        {/* <input type="Submit" value="Reset" /> */}
      </form>
    </div>
  );
};

export default Form;
