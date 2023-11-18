const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialAccountState, action) {
  switch (action.type) {
    case "account/deposit": {
      return { ...state, balance: state.balance + action.payload };
    }
    case "account/withdraw": {
      if (state.balance < action.payload) throw new Error("insufficient funds");
      return { ...state, balance: state.balance - action.payload };
    }
    case "loan/apply": {
      if (state.loan > 0) return state;
      const { amount, purpose } = action.payload;
      return {
        ...state,
        loan: amount,
        loanPurpose: purpose,
        balance: state.balance + amount,
      };
    }
    case "loan/pay": {
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    }
    default:
      return state;
  }
}

// action creators
export function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}
export function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}
export function requestLoan(amount, purpose) {
  return {
    type: "loan/apply",
    payload: { amount: amount, purpose: purpose },
  };
}
export function payLoan() {
  return {
    type: "loan/pay",
  };
}
