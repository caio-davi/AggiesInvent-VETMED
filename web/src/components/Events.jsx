import React from "react";

import { MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBIcon } from "mdbreact";

const Events = (props) => {
  const getPet = (id) => props.db.pets.find((pet) => pet.id === id);

  return (
    <MDBCard className="cascading-admin-card">
      <MDBCardHeader>
        <MDBIcon icon="clipboard-list" /> <b>Updates:</b>
      </MDBCardHeader>
      <MDBCardBody>
        {props.db.events.map((event) => {
          if (event.petId == props.petId) {
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
          }
        })}
      </MDBCardBody>
    </MDBCard>
  );
};

export default Events;
