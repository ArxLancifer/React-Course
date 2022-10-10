import React from "react";
import './ExpenseForm.css';
import { useState } from 'react';
function ExpenseForm(props){

    const [enteredTitle, setEntereTitle] = useState('')
    const [enteredAmount, setEntereAmount] = useState('')
    const [enteredDate, setEntereDate] = useState('')
    // const [userInput, setUserInput] =useState({
    //     enteredTitle: '',
    //     enteredAmount:'',
    //     enteredDate:'',
    // })

    

    function titleChangeHandler(event) {
        console.log(enteredTitle)
        setEntereTitle(event.target.value)
        // setUserInput({ ...userInput, enteredTitle: event.target.value });
        // console.log(userInput);
        // setUserInput((prevState)=>{
        //     console.log(prevState)
        //     return {...prevState, enteredTitle: event.target.value}
        // })  
      }
    function amountChangeHandler(event){
        console.log(enteredAmount)
        setEntereAmount(event.target.value)
        // setUserInput({ ...userInput, enteredAmount: event.target.value });
        // console.log(userInput)
    }
    function dateChangeHandler(event){
        console.log(enteredDate)
        setEntereDate(event.target.value)
        // setUserInput({ ...userInput, enteredDate: event.target.value });
        // console.log(userInput)
    }

    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEntereTitle('')
        setEntereAmount('')
        setEntereDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div  className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;