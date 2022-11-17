import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
    const valueArray = props.dataPoints.map(point => point.value);
    const totalMax = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
