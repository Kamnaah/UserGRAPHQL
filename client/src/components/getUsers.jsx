import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/query";
import { useState } from "react";

function GetUsers({userDetail}) {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
  useEffect(()=>{
    if(userDetail && data){
      setUsers([...users, userDetail])
    }
  },[userDetail])
  return (
    <table>
      
      <tr>
        <td><b>SRno</b></td>
        <td><b>First_Name</b></td>
        <td><b>Last_Name</b></td>
        <td><b>Email</b></td>
        <td><b>Gender</b></td>
        <td><b>IP_Address</b></td>
      </tr>
      {users.map((value,idx) => {
        return (
          <tr key={value.id}>
            <td>{idx+1}</td>
            <td>{value.first_name}</td>
            <td>{value.last_name}</td>
            <td> {value.email}</td>
            <td> {value.gender}</td>
            <td> {value.ip_address}</td> 
          </tr>
        );
      })}
    </table>
  );
}

export default GetUsers;
