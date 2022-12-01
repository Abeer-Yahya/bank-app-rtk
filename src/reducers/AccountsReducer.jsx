import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    customerName: "Israa Othman",
    accountNumber: "123456",
    accountType: "Savings",
  },
  {
    id: 2,
    customerName: "Ahmad Zahran",
    accountNumber: "987653",
    accountType: "Student accounts",
  },
  {
    id: 3,
    customerName: "Omar Hussein",
    accountNumber: "987654",
    accountType: "Student accounts",
  },
  {
    id: 4,
    customerName: "Dalia Diab",
    accountNumber: "987655",
    accountType: "Savings",
  },
  {
    id: 5,
    customerName: "Shatha Al Baw",
    accountNumber: "987656",
    accountType: "Student accounts",
  },
];

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      let newState = state.filter((account) => {
        return account.id != action.payload;
      });
      return (state = newState);
    },
  },
});
export const accountState = (state) => state.accounts;
export const { addUser, deleteUser } = accountsSlice.actions;
export default accountsSlice.reducer;
