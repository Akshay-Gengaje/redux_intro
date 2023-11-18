import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div className="bg-gradient-to-r from-purple-500 to-purple-900 w-full min-h-screen p-5">
      <h1 className="text-4xl font-bold text-center p-10">
        🏦 The React-Redux Bank ⚛️
      </h1>
      <p className="text-lg mb-20 text-center italic">
        This is a simple bank application built using React and Redux.
      </p>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <AccountOperations />
          <Customer />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
