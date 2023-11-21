import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState, // Corrected typo here
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: { fullName, nationalId, createdAt: new Date().toISOString },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
  },
});

export default customerSlice.reducer;
export const { createCustomer } = customerSlice.actions;

// export default function customerReducer(state = initialCustomer, action) {
//   switch (action.type) {
//     case "customer/create":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalId) {
//   return {
//     type: "customer/create",
//     payload: { fullName, nationalId, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return {
//     type: "customer/update-name",
//     payload: { fullName },
//   };
// }
