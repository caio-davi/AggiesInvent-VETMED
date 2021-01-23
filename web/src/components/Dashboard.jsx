import React from "react";
import {
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBRow,
} from "mdbreact";
import { Line, Pie, Bar, Doughnut } from "react-chartjs-2";
import LineChart from "./LineChart";

const Dashboard = (props) => {
  const getPet = (id) => props.db.pets.find((pet) => pet.id === id);

  return (
    <div style={{ board: "2pt" }}>
      <MDBRow className="mb-4">
        <MDBCol xl="4" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <MDBCardHeader>
              <MDBIcon icon="exclamation-triangle" className="red-text" />{" "}
              <b>Alerts:</b>
            </MDBCardHeader>
            <MDBCardBody>
              {props.db.events.map((event) => {
                if (event.alert) {
                  return (
                    <div
                      style={{
                        border: "1px solid black",
                        padding: "1rem",
                        margin: "0.5rem",
                        background: "LightPink",
                        borderRadius: 8,
                      }}
                    >
                      {getPet(event.petId).name} - {event.description}
                    </div>
                  );
                }
              })}
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="cascading-admin-card">
            <MDBCardHeader>
              <MDBIcon icon="clipboard-list" /> <b>Updates:</b>
            </MDBCardHeader>
            <MDBCardBody>
              {props.db.events.map((event) => {
                let color = "WhiteSmoke";
                if (event.alert) color = "LightPink";
                return (
                  <div
                    style={{
                      border: "1px solid black",
                      padding: "1rem",
                      margin: "0.5rem",
                      background: color,
                      borderRadius: 8,
                    }}
                  >
                    {getPet(event.petId).name} - {event.description}
                  </div>
                );
              })}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <LineChart />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Dashboard;
