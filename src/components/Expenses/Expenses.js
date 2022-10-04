import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses({ data }) {
	const [yearFilterValue, setYearFilterValue] = useState("2021");

	const onFilterYearChangeHandler = (value) => {
		setYearFilterValue(value);
	};

	const filteredExpenses = data.filter(
		(expense) => expense.date.getFullYear().toString() === yearFilterValue
	);

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selectedYear={yearFilterValue}
					onFilterYearChange={onFilterYearChangeHandler}
				/>
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
	/* another way of doing the condition above with conditional (terniary) operator, directly inside the return: */
	// {filteredExpenses.length === 0 ? (
	// 	<p>No expense found.</p>
	// ) : (
	// 	filteredExpenses.map((expense) => (
	// 		<ExpenseItem
	// 			/* it is strongly recommended to include a (unique) key (built-in prop of components) in list items */
	// 			key={expense.id}
	// 			title={expense.title}
	// 			amount={expense.amount}
	// 			date={expense.date}
	// 		/>
	// 	))
	// )}

	/* alternative to above conditional (terniary) operator would be to use short-circuit evaluation ( && and || ) */
	/* short-circuit evaluation runs the right side of the logic statement based on the result of the left side */
	// {filteredExpenses.length ===
	// 	0 /* if this is true, the rest of the statement has a chance to run based on the right side; if it is false, the statement will be false independent on the right side (false && (false or true) is always false) */ && (
	// 	<p>No Expenses found.</p>
	// )}
	// {filteredExpenses.length > 0 &&
	// 	filteredExpenses.map((expense) => (
	// 		<ExpenseItem
	// 			/* it is strongly recommended to include a (unique) key (built-in prop of components) in list items */
	// 			key={expense.id}
	// 			title={expense.title}
	// 			amount={expense.amount}
	// 			date={expense.date}
	// 		/>
	// 	))}
}

export default Expenses;
