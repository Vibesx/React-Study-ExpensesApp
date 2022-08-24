import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// props is received from the tags in the parent Component; ex: parent component includes <ExpenseItem test="asd">...
// and props in this case will include a property named test with the value of "asd", callable through props.test
// NOTE: the param here can have any name, but we use props for clarity
export default function ExpenseItem(props) {
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button>Change Title</button>
		</Card>
	);
}
