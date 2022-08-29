import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// props is received from the tags in the parent Component; ex: parent component includes <ExpenseItem test="asd">...
// and props in this case will include a property named test with the value of "asd", callable through props.test
// NOTE: the param here can have any name, but we use props for clarity
export default function ExpenseItem(props) {
	// the useState function returns an array; first element is the managed value and the second is a function that allows us to modifiy the value
	// the parameter of useState is the default value we want
	//const [title, setTitle] = useState(props.title);

	// a good practice is to name functions used by events with <action>Handler
	// const clickHandler = () => {
	// 	// the setter function provided by useState is a special function that changes our value AND also triggers a rerender of the component (recalls the ExpenseItem function)
	// 	setTitle("TestTitle");
	// 	console.log(title);
	// };

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
}
