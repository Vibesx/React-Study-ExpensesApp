import "./ChartBar.css";

const ChartBar = (props) => {
	let barFillHeight = "0%";

	if (props.maxValue > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
	}

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				{/* style takes a dynamic object as value (first pair of curly bracers), which itself takes a javascript object as value */}
				{/* the key of these objects will be the css keys (ex: background-color); if these properties contain dashes, you either need to put the in single quotes, or use camel-case notation (ex: backgroundColor) */}
				<div
					className="chart-bar__fill"
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
};

export default ChartBar;
