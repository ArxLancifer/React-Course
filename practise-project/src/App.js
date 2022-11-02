import React, { useState } from 'react';
import FormInput from './components/FormComponent/FormInput'
import UsersList from './components/UserListComponent/UsersList'
import Modal from './components/InputModal/InputModal'


function App() {

    const users = [{name:"Anestis", age:32}]

    const [userList, setUserList] = useState(users)
    const [modalShow, setModalShow] = useState({state:false, message:""});


    function handleModalShow(state, msg){
        setModalShow({state:state, message:msg})
    }

    function handleUserAdd(newUser){
        if(newUser.age <=0){
            setModalShow({state:true, message:"User must be > 0"})
            return;
        }else if (newUser.name === ""){
            setModalShow({state:true, message:"Username must have a value"})
            return;
        }
        setUserList([...userList, {name:newUser.name, age:newUser.age}])
    }
  
    return (
    <div className='container'>
        {modalShow.state && <Modal modalProps={modalShow} modalShowHandler={handleModalShow} />}
        <FormInput handleUserAdd={handleUserAdd}/>
        <UsersList users={userList}/>
    </div>
  );
}

export default App;
