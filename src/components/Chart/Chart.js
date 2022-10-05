import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	const dataPointValues = props.dataPoints.map(
		(dataPoint) => dataPoint.value
	);
	// Math.max expects a multitude of arguments, not an array, so we use the spread operator to spread the array into individual values
	const totalMaximum = Math.max(...dataPointValues);
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
