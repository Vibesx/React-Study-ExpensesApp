import "./Card.css";

function Card(props) {
	const classes = "card " + props.className;
	// props.children is a built-in prop that all components get by default and allows us to give this component wrapper functionality (ex: <Card>.....</Card>)
	return <div className={classes}>{props.children}</div>;
}

export default Card;
