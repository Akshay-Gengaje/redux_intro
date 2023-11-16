const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit": {
      return { ...state, balance: state.balance + action.payload };
    }
    case "account/withdrawal": {
      if (state.balance < action.payload) throw new Error("insufficient funds");
      return { ...state, balance: state.balance - action.payload };
    }
    case "loan/apply": {
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
