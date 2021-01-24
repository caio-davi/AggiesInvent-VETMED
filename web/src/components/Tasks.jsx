import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const Tasks = (props) => {
  return (
    <MDBRow>
      <MDBCol col="4">
        <MDBCard>
          <MDBCardImage
            className="view view-cascade gradient-card-header red lighten-3"
            cascade
            tag="div"
          >
            <h2 className="h2-responsive mb-2">Take to walk</h2>
            <p>
              <MDBIcon icon="calendar-alt" /> 26.07.2017
            </p>
          </MDBCardImage>
          <MDBCardBody cascade className="text-center">
            <MDBCardText>Take your pet to a happy walk everyday!</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col="4">
        <MDBCard narrow>
          <MDBCardImage
            className="view view-cascade gradient-card-header red lighten-3"
            cascade
            tag="div"
          >
            <h2 className="h2-responsive">Clear the ears</h2>
            <p>
              <MDBIcon icon="exclamation-triangle" /> LATE: 01.07.2020
            </p>
          </MDBCardImage>
          <MDBCardBody cascade className="text-center">
            <MDBCardText>
              <div>1. Pull back the tip of the ear</div>
              <div>2. “Flood” the ear with a cleaning solution</div>
              <div>3. Massage the ear for 15–30 seconds</div>
              <div>4. Wipe the excess liquid</div>
            </MDBCardText>
            <a
              href="!#"
              className="orange-text mt-1 d-flex justify-content-end align-items-center"
            >
              <h5 className="">
                Read more{" "}
                <MDBIcon
                  icon="chevron-right"
                  className="ml-2"
                  size="sm"
                ></MDBIcon>
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col="4" className="d-flex flex-column justify-content-center">
        <div>
          <MDBIcon className="blue-text pr-3" icon="plus-circle" size="5x" />
        </div>
        Add New Task
      </MDBCol>
    </MDBRow>
  );
};

export default Tasks;
