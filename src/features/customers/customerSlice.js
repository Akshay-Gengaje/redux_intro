const initialCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};
export default function customerReducer(state = initialCustomer, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/create",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/update-name",
    payload: { fullName },
  };
}
