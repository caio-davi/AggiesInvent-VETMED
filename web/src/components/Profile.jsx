import React from "react";
import RadarChart from "../components/RadarChart";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

import Calendar from "react-calendar";
import zoe from "../images/zoe.png";

const Profile = (props) => {
  const [date, setDate] = React.useState(new Date());
  //   const getPet = (id) => props.db.pets.find((pet) => pet.id === id);

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4" style={{ width: "200pt" }}>
          <div className="d-flex justify-content-center">
            <img className="rounded-circle" alt="10x10" src={zoe} />
          </div>
          <div className="d-flex justify-content-center">
            <MDBRow>Text</MDBRow>
          </div>
        </MDBCol>
        <MDBCol>
          <Calendar onChange={setDate} value={date} />
          <RadarChart date={date} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Profile;
