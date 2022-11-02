
import styles from './UsersListStyle.module.css'
function UsersList({users}){


    return(
        <div  className={styles.list}>
            {users.map(user=>{
                return <p key={Math.random()}>{user.name} ({user.age} years old)</p>
            })}
        </div>
    )

}

export default UsersList;