import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  return (
    <h2 className="fixed top-5 right-5 bg-slate-200 p-2 rounded shadow-md hover:shadow-2xl hover:animate-pulse font-sans">
      👋 Welcome, {customer || "Guest"}
    </h2>
  );
}

export default Customer;
