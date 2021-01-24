import React from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import zoe from "../images/zoe.png";
import tareco from "../images/tareco.png";
import chloe from "../images/chloe.png";

const getImage = (petId) => {
  switch (petId) {
    case 1:
      return tareco;
    case 2:
      return zoe;
    case 3:
      return chloe;
  }
};

const Pets = (props) => {
  return (
    <MDBRow>
      {props.db.pets.map((pet) => {
        return (
          <MDBCol md="4">
            <MDBCard>
              <MDBCardBody>
                <Link to="Profile" onClick={() => props.setPetId(pet.id)}>
                  <div className="d-flex justify-content-center">
                    <img
                      className="rounded-circle"
                      alt="10x10"
                      src={getImage(pet.id)}
                    />
                  </div>
                  <h4 className="d-flex flex-row justify-content-between">
                    {pet.name}
                    <MDBIcon icon={pet.specie} />
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
