import { FaWallet } from "react-icons/fa";
function Balance({ transactions }) {
    
    const balance = transactions.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <div className="balance">
      <h2>
  <FaWallet /> Current Balance
</h2>
      <h1>₹ {balance}</h1>
    </div>
  );
}

export default Balance;