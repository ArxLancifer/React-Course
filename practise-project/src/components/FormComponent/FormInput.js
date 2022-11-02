import {useState} from 'react';
import styles from './FormInputStyles.module.css'
function FormInput(props){


    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');

    function usernameHandler(event){
        setUsername(event.target.value);
    }

    function userAgeHandler(event){
        setUserAge(event.target.value);
    }

    function addUserHandler(event){
        event.preventDefault();
        props.handleUserAdd({name:username, age:userAge})
    }



    return(
       <form className={styles["form-container"]} onSubmit={addUserHandler}>
           <label htmlFor='username'>Username</label>
           <input onChange={usernameHandler} id='username' type="text" />
           <label htmlFor='age'>Age (years)</label>
           <input onChange={userAgeHandler} id='age' type="number"/>
           <button type="submit">Add User</button>
       </form> 
    )
}

export default FormInput;