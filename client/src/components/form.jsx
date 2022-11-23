import React, { useState } from "react";
import CREATE_USER  from "../GraphQL/mutation";
import { useMutation } from "@apollo/client";

function Form({onChange}) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [ip_address, setIpAddress]= useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);

  const addUser = () => {
    createUser({
      variables: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        gender: gender,
        ip_address: ip_address,
      },
    });
    alert("User Added")
    onChange(
       {
        first_name: first_name,
        last_name: last_name,
        email: email,
        gender: gender,
        ip_address: ip_address,
      }
    )
    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Gender"
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      <input
      type="text"
      placeholder="IP Address"
      onChange={(e)=>{
        setIpAddress(e.target.value);
      }}/>
      <button onClick={addUser}> Create User</button>
    </div>
  );
}

export default Form;