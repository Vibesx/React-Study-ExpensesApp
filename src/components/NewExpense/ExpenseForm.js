import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const [formActive, setFormActive] = useState(false);

	// event is a parameter passed by default to any event (onClick, onChange, etc)
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const cancelHandler = () => {
		clearForm();
	};

	const submitHandler = (event) => {
		// by default, the submit event triggers a request send and page refresh, which we do not want as react uses a single page approach
		// to prevent this behaviour, we can call event.preventDefault()
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount, // bug fix; when adding multiple values, those values are added as strings instead of numbers; adding "+" in front turns strings into numbers
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		//console.log(expenseData);
		clearForm();
	};

	const addNewExpenseHandler = () => {
		setFormActive(true);
	};

	const clearForm = () => {
		setFormActive(false);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	if (!formActive) {
		return (
			<div>
				<button type="button" onClick={addNewExpenseHandler}>
					Add New Expense
				</button>
			</div>
		);
	}

	return (
		// forms have a default onSubmit event that is triggered on pressing the button of type submit
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					{/* two-way binding: we set the value of the input to our state variable; that way when it changes, the value inside the input changes as well */}
					{/* this will help for example when we will want to clear the fields */}
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
						required
					/>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
						required
					/>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
						required
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={cancelHandler}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

// alternative approach to multiple individual states
// just a test function to display alternative method; ignore otherwise
const AlternativeExpenseForm = () => {
	// we can also have a different approach to the above code, using an object instead of a string that encompasses all 3 values:
	const [userInput, setUserInput] = useState({
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
	});
	// then we use setUserInput({ ...userInput, enteredTitle: event.target.value})
	// ...userInput basically sets the properties to the old properties of userInput, and then we can override individual fields
	// with this aproach we need to be careful always to set the old fields, as if we would just set the changed field, the others would be lost
	// that's why we need to set ...userInput first
	const titleChangeHandler = (event) => {
		// this method of using previous state (...userInput) is will work most of the time, but in some cases it might fail (when we set a lot of states in paralel)
		// because the previous state we get might not be the most recent one
		// therefore, a better option is illustrated below
		//setUserInput({ ...userInput, enteredTitle: event.target.value });
		setUserInput((prevState) => {
			// here we are sure to get the latest previous state; prevState (can be named whatever) is passed by default by react as a parameter and stores the latest state
			// this approach should always be used when we need to work with previous state snapshots as react is making sure it is the right one
			return { ...prevState, enteredTitle: event.target.value };
		});
	};

	const amountChangeHandler = (event) => {
		setUserInput({ ...userInput, enteredAmount: event.target.value });
	};

	const dateChangeHandler = (event) => {
		setUserInput({ ...userInput, enteredDate: event.target.value });
	};
};

export default ExpenseForm;
