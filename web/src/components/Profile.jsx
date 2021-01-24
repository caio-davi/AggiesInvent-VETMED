import React from "react";
import RadarChart from "../components/RadarChart";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";
import Tasks from "./Tasks";
import Calendar from "react-calendar";
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

const ProfileView = (props) => {
  switch (props.selected) {
    case "Health":
      return (
        <div>
          <RadarChart date={props.date} />
          <Calendar onChange={props.setDate} value={props.date} />
        </div>
      );
    case "Tasks":
      return <Tasks />;
    default:
      return (
        <div>
          <RadarChart date={props.date} />
          <Calendar onChange={props.setDate} value={props.date} />
        </div>
      );
  }
};

const Profile = (props) => {
  const [date, setDate] = React.useState(new Date());
  const [selected, setSelected] = React.useState("Health");
  //   const getPet = (id) => props.db.pets.find((pet) => pet.id === id);

  const options = ["Health", "Tasks", "Events", "Pharmacy"];

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="3">
          <div className="d-flex justify-content-center">
            <img
              className="rounded-circle"
              alt="10x10"
              src={getImage(props.petId)}
            />
          </div>
          <div className="d-flex flex-column justify-content-center">
            {options.map((option) => {
              return (
                <MDBBtn
                  color="light-blue"
                  className="light-blue darken-3"
                  onClick={() => setSelected(option)}
                >
                  {option}
                </MDBBtn>
              );
            })}
          </div>
        </MDBCol>
        <MDBCol md="9">
          <ProfileView selected={selected} date={date} setDate={setDate} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Profile;
