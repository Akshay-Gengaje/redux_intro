import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loanPurpose = action.payload.purpose;
        state.loan = action.payload.amount;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

export default accountSlice.reducer;
export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

// export default function accountReducer(state = initialAccountState, action) {
//   switch (action.type) {
//     case "account/deposit": {
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     }
//     case "account/withdraw": {
//       if (state.balance < action.payload) throw new Error("insufficient funds");
//       return { ...state, balance: state.balance - action.payload };
//     }
//     case "loan/apply": {
//       if (state.loan > 0) return state;
//       const { amount, purpose } = action.payload;
//       return {
//         ...state,
//         loan: amount,
//         loanPurpose: purpose,
//         balance: state.balance + amount,
//       };
//     }
//     case "loan/pay": {
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     }

//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };
//     default:
//       return state;
//   }
// }

// // action creators
// export function deposit(amount, currency) {
//   if (currency === "USD")
//     return {
//       type: "account/deposit",
//       payload: amount,
//     };
//   // api call
//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" });
//     try {
//       const res = await fetch(
//         `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//       );
//       const data = await res.json();

//       const converted = data.rates.USD;
//       dispatch({
//         type: "account/deposit",
//         payload: converted,
//       });
//     } catch (e) {
//       throw new Error(e);
//     }
//   };
// }
// export function withdraw(amount) {
//   return {
//     type: "account/withdraw",
//     payload: amount,
//   };
// }
// export function requestLoan(amount, purpose) {
//   return {
//     type: "loan/apply",
//     payload: { amount: amount, purpose: purpose },
//   };
// }
// export function payLoan() {
//   return {
//     type: "loan/pay",
//   };
// }
