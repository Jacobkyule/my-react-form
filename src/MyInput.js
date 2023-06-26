import React, { useState } from "react";
import './App.css';
function MyInput() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [homeroomClassNumber, setHomeroomClassNumber] = useState('');
  const [studentId, setStudentId] = useState('');
   const [formData, setFormData] = useState({});
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  function handleHomeroomClassNumber(e) {
    setHomeroomClassNumber(e.target.value);
  }
  function handleStudentId(e) {
    setStudentId(e.target.value);
  } 
 function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create the form data object
    const formData = {
      firstName,
      lastName,
      age,
      address,
      homeroomClassNumber,
      studentId
    };

    // Set the form data object in the state
    setFormData(formData);

    // Perform any other actions with the form data, such as sending it to an API
    alert(JSON.stringify(formData));

    // Reset the form fields
    setFirstName('');
    setLastName('');
    setAge('');
    setAddress('');
    setHomeroomClassNumber('');
    setStudentId('');
  }


  return (
    <>
      <div>
      <div>
        <h2>Get in the Register Now!!.</h2>
        <p>
          Sign up for this form to get you registered
        </p>
        <form className="App-flex" onSubmit={handleSubmit}>
            <div className="App-label">
          <label for="firstname">First name: </label>
          <input className="App-input" id="firstname" type="text" onChange={handleFirstName} value={firstName} required />
            </div>
            <div className="App-label">
           <label for="lastname">Last name: </label>
          <input className="App-input" id="lastname" type="text" onChange={handleLastName} value={lastName} required />
          </div>
          <div className="App-label">
          <label for="age">Age: </label>
          <input className="App-input" id="age" type="text" onChange={handleAge} value={age} required />
          </div>
          <div className="App-label">
           <label for='address'>Address: </label>
          <input className="App-input" id='address' type="text" onChange={handleAddress} value={address} required />
          </div>
          <div className="App-label">
           <label for='homeroomClassNumber'>Homeroom Class Number: </label>
          <input className="App-input" id='homeroomClassNumber' type="text" onChange={handleHomeroomClassNumber} value={homeroomClassNumber} required />
          </div>
          <div className="App-label">
          <label for='studentId'>StudentId : </label>
          <input className="App-input" id='studentId' type="text" onChange={handleStudentId} value={studentId} required />
          </div>
          <button type='submit' className="App-btn" >Submit</button>
        </form>
      </div>
      <div>
        <h2>Current User Input: </h2>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{age}</p>
        <p>{address}</p>
        <p>{homeroomClassNumber}</p>
        <p>{studentId}</p>
        
      </div>
      </div>
      </>
    
  );
}

export default MyInput;
