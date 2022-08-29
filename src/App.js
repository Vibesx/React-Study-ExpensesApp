import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const addExpenseHandler = (expenses) => {
		console.log("In App.js");
		console.log(expenses);
	};

	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: "e2",
			title: "New TV",
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses data={expenses} />
		</div>
	);

	// the non-JSX alternative to the above return is the following (jsx basically does this behind the scenes)
	// JSX permits us to ommit the import of React in every component
	/*
		import React from 'react';
		
		// first parameter is the tag, second is the arguments (class, etc) and 3rd is a ...children which encompasses the children tags of the element; 3rd param is optional
		return React.createElement('div', {}, React.createElement('h2', {}), React.createElement(Expenses), {items: expenses});
	*/
}

export default App;
