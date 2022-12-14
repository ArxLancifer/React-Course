import {Component}  from 'react';
import classes from './User.module.css';

//Class based Component
class User extends Component{

    componentWillUnmount(){
        console.log('User will unmount') // Logged 3 times due we have 3 user names (components)
    }

    render() {
        return <li className={classes.user}>{this.props.name}</li>;
    }
}
// Functional Component
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
