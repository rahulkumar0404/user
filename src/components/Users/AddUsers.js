import React, { useState }  from "react"
import Card from "../UI/Card"
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModel from "../UI/ErrorModel"
const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState();


    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        }
        if (+enteredAge < 1) { // forced conversion of string to int
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>1).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('')
        setEnteredAge('')
    }

    const userChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }
    return (
        <div>
            {error && <ErrorModel
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />}
            <Card cssClass={ styles.input}>
                <form  onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id='username' type='text' value={enteredUsername} onChange={userChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                    <input id='age' type='number' value={ enteredAge} onChange={ageChangeHandler}/>
                <Button type='submit'>Add User</Button>
                </form>
                </Card>
        </div>
    )
}


export default AddUser;