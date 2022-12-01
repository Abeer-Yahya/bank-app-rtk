import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, accountState } from "../reducers/AccountsReducer";
import { incre, decre, counterState } from "../reducers/CounterReducer";

export function Home() {
  const accounts = useSelector(accountState);
  const counter = useSelector(counterState);

  const dispatch = useDispatch();
  return (
    <MDBContainer style={{ minHeight: "70vh" }}>
      <div className="text-center">
        <p className="h2">{counter}</p>

        <MDBBtn
          onClick={() => {
            dispatch(decre());
          }}
        >
          -
        </MDBBtn>
        <MDBBtn
          className="ms-3"
          onClick={() => {
            dispatch(incre());
          }}
        >
          +
        </MDBBtn>
      </div>
      <Form />
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Account Number</th>
            <th scope="col">Account Type</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {accounts.map((account) => {
            return (
              <tr key={account.id}>
                <th scope="row">{account.id}</th>
                <td>{account.customerName}</td>
                <td>{account.accountNumber}</td>
                <td>{account.accountType}</td>
                <td>
                  <MDBBtn
                    color="danger"
                    onClick={() => {
                      dispatch(deleteUser(account.id));
                    }}
                  >
                    <MDBIcon fas icon="trash" />
                  </MDBBtn>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
      <h3>Number of accounts : {accounts.length}</h3>
    </MDBContainer>
  );
}

export default Home;
