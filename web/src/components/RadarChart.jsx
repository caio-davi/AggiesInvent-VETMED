import React from "react";
import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

const randomData = (size) => {
  let data = [];
  for (let index = 0; index < size; index++) {
    data.push(getRandom(1, 99));
  }
  return data;
};

console.log(randomData(20));

const RadarChart = (props) => {
  const labels = [
    "Eating",
    "Drinking",
    "Sleeping",
    "Playing",
    "Barking",
    "Relaxing",
    "Running",
  ];
  const state = {
    dataRadar: {
      labels: labels,
      datasets: [
        {
          label: "Week",
          backgroundColor: "rgba(194, 116, 161, 0.5)",
          borderColor: "rgb(194, 116, 161)",
          data: randomData(labels.length),
        },
        {
          label: "Weekend",
          backgroundColor: "rgba(71, 225, 167, 0.5)",
          borderColor: "rgb(71, 225, 167)",
          data: randomData(labels.length),
        },
      ],
    },
  };

  return (
    <MDBContainer>
      <h3 className="mt-5">
        Health Summary - {props.date.toString().substring(0, 16)}
      </h3>
      <Radar data={state.dataRadar} options={{ responsive: true }} />
    </MDBContainer>
  );
};

export default RadarChart;
