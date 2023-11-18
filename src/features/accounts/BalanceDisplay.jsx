import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const { balance, isLoading } = useSelector((state) => state.account);
  return (
    <div className="fixed top-20 right-5 bg-slate-200 p-2 rounded shadow-md hover:shadow-2xl hover:animate-bounce font-sans">
      Balance : {isLoading ? `Converting..` : formatCurrency(balance)}
    </div>
  );
}

export default BalanceDisplay;
