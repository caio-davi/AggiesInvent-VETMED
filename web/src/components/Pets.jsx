import React from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

const Pets = (props) => {
  return (
    <MDBRow>
      {props.db.pets.map((pet) => {
        return (
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <Link to="Profile" onClick={() => props.setPetId(pet.id)}>
                  <h4 className="d-flex flex-row justify-content-between">
                    {pet.name}
                    <MDBIcon icon="cat" />
                  </h4>
                </Link>
                <hr />
                <div>
                  <MDBIcon icon="rocket" /> <b>Streak:</b> {pet.streak} Days
                </div>
                <div>
                  <MDBIcon icon="weight" /> <b>Weight:</b> {pet.weight}
                </div>
                <div>
                  <MDBIcon icon="exclamation-triangle" className="red-text" />{" "}
                  <b>Alerts:</b> {pet.alerts.length}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        );
      })}
    </MDBRow>
  );
};

export default Pets;
