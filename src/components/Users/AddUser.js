import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  // Use empty string '' for starting input to be empty
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    // Checking to see if something is entered in the form, if not- return
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    // check for age input value, if smaller than 1. Adding + to convert enteredAge to a number from a string
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    // Will reset form to empty strings
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
