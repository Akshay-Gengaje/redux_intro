import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((state) => state.account.balance);
  return (
    <div className="fixed top-20 right-5 bg-slate-200 p-2 rounded shadow-md hover:shadow-2xl hover:animate-bounce font-sans">
      Balance : {formatCurrency(balance)}
    </div>
  );
}

export default BalanceDisplay;
