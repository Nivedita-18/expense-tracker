import {
  FaArrowDown,
  FaArrowUp,
  FaWallet,
} from "react-icons/fa";

import {
  FaArrowTrendUp,
  FaArrowTrendDown,
} from "react-icons/fa6";

import { FaList } from "react-icons/fa";
function SummaryCards({ transactions }) {

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((total, item) => total + item.amount, 0);

  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((total, item) => total + item.amount, 0);

  const totalTransactions = transactions.length;

  return (
    <div className="summary">

      <div className="card income">
        <h3>
  <FaArrowDown /> Income
</h3>
        <p>₹ {income}</p>
      </div>

      <div className="card expense">
        <h3>
  <FaArrowUp /> Expense
</h3>
        <p>₹ {Math.abs(expense)}</p>
      </div>

      <div className="card total">
        <h3>
  <FaWallet /> Total Transactions
</h3>
        <p>{totalTransactions}</p>
      </div>

    </div>
  );
}

export default SummaryCards;