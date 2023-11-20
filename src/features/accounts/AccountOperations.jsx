import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const dispatch = useDispatch();
  const account = useSelector((store) => store.account);
  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="font-sans flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-5">Your account operations</h2>
      <div className="p-6 bg-black bg-opacity-30 mx-6 space-y-3 rounded-lg text-lg uppercase w-[90%]  md:w-[70%]  flex flex-col items-stretch">
        <div className="flex justify-between gap-2">
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
            className="rounded-md px-1 "
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="rounded-md px-1"
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button
            onClick={handleDeposit}
            className="bg-gray-200 p-1 rounded-md w-60"
          >
            Deposit {depositAmount}
          </button>
        </div>

        <div className="flex justify-between gap-2">
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
            className="rounded-md px-1 w-80"
          />
          <button
            onClick={handleWithdrawal}
            className="bg-gray-200 p-1 rounded-md w-60"
          >
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div className="flex justify-around">
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
            className="rounded-md px-1"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
            className="rounded-md px-1"
          />
          <button
            onClick={handleRequestLoan}
            className="bg-gray-200 p-1 rounded-md lg:w-60"
          >
            Request loan
          </button>
        </div>

        <div>
          <span className="fixed top-32 right-5 bg-slate-200 p-1 rounded">
            Pay back ${account.loan}
            <br />
           {account.loanPurpose && <span className="text-sm italic font-semibold text-red-600 lowercase">
              ( {account.loanPurpose} )
            </span>}
          </span>
          <button
            onClick={handlePayLoan}
            className="bg-gray-200 p-1 rounded-md w-full mt-4 mb-0"
          >
            Pay loan
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
