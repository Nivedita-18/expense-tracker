import { toast } from "react-toastify";

function TransactionList({
  transactions,
  setTransactions,
  search,
  selectedCategory,
  dateFilter,
  setEditTransaction,
}){

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );

    setTransactions(updatedTransactions);
    toast.success("Transaction deleted successfully!");
  };



const today = new Date();  
const filteredTransactions = transactions.filter((transaction) => {

  const transactionDate = new Date(transaction.date);

  const matchesSearch =
    transaction.description
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    transaction.category === selectedCategory;

  let matchesDate = true;

  if (dateFilter === "Today") {

    matchesDate =
      transactionDate.toDateString() ===
      today.toDateString();

  }

  else if (dateFilter === "Month") {

    matchesDate =
      transactionDate.getMonth() === today.getMonth() &&
      transactionDate.getFullYear() === today.getFullYear();

  }

  else if (dateFilter === "Year") {

    matchesDate =
      transactionDate.getFullYear() === today.getFullYear();

  }

  return (
    matchesSearch &&
    matchesCategory &&
    matchesDate
  );

});

  return (
    <div className="transaction-list">

      <h2>Transaction History</h2>

      {filteredTransactions.length === 0 ? (

        <p>No transactions yet.</p>

      ) : (

        <div>

          <div className="transaction-header">
            <strong>Description</strong>
            <strong>Amount</strong>
            <strong>Category</strong>
            <strong>Payment</strong>
            <strong>Date</strong>
            <strong>Edit</strong>
            <strong>Delete</strong>
          </div>

          {filteredTransactions.map((transaction) => (

            <div
              key={transaction.id}
              className="transaction-item"
            >

              <strong>{transaction.description}</strong>

              <span
                className={
                  transaction.amount > 0
                    ? "income-text"
                    : "expense-text"
                }
              >
                ₹ {transaction.amount}
              </span>

              <span>{transaction.category}</span>
              <span>{transaction.paymentMethod}</span>

              <span>
                {new Date(transaction.date).toLocaleDateString("en-GB")}
              </span>

              <button
className="edit-btn"
onClick={() => setEditTransaction(transaction)}
>
✏ Edit
</button>

              <button
                onClick={() => deleteTransaction(transaction.id)}
              >
                🗑 Delete
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default TransactionList;