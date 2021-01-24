// import "animate.css/animate.min.css";
import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBIcon, MDBBtn } from "mdbreact";

const Login = (props) => {
  return (
    <div>
      <div className={"row"} style={{ height: "25vh" }} />
      <div className={"row"}>
        <div className={"col"} />
        <div className={"col-6 my-auto"}>
          <MDBCard className={"align-self-center"}>
            <MDBCardBody>
              <MDBCardHeader className="form-header unique-color rounded">
                <h3 className="my-3">
                  <MDBIcon icon="paw" size="lg" />
                  PATH
                </h3>
              </MDBCardHeader>
              <div className={"text-center"}>
                Click the button below to login.
              </div>
              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="light-blue darken-3"
                  className="mb-3"
                  onClick={() => props.setAuthenticated(true)}
                >
                  Login
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className={"col"} />
      </div>
    </div>
  );
};

export default Login;
