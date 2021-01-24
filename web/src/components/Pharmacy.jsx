import React from "react";
import { MDBContainer, MDBIcon } from "mdbreact";

const Pharmacy = (props) => {
  const getPet = (id) => props.db.pets.find((pet) => pet.id === id);
  return (
    <MDBContainer>
      <h1>Add your prescription to {getPet(props.petId).name}:</h1>
      <MDBIcon className="blue-text pr-3" icon="plus-circle" size="5x" />
    </MDBContainer>
  );
};

export default Pharmacy;
