import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBRow } from "mdbreact";
import { Line, Pie, Bar, Doughnut } from "react-chartjs-2";

const Dashboard = (props) => {
  return (
    <React.Fragment>
      <MDBRow className="mb-4">
        <MDBCol xl="4" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <MDBCardHeader>
              Total Revenue:
              <strong>${ins1000Sep(dataset.totalRevenue.toFixed(2))}</strong>
            </MDBCardHeader>
            <MDBCardBody>
              <Doughnut
                data={revenueDoughnut}
                height={150}
                options={optionsDoughnut}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="4" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <MDBCardHeader>
              Total Expense:
              <strong>${ins1000Sep(dataset.totalExpense.toFixed(2))}</strong>
            </MDBCardHeader>
            <MDBCardBody>
              <Doughnut
                data={expenseDoughnut}
                height={150}
                options={optionsDoughnut}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
};

export default Dashboard;
