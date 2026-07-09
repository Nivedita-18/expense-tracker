import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function TransactionForm({
  transactions,
  setTransactions,
  editTransaction,
  setEditTransaction
}) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {

  if (editTransaction) {

    setDescription(editTransaction.description);

    setAmount(Math.abs(editTransaction.amount));

    setCategory(editTransaction.category);

    setPaymentMethod(editTransaction.paymentMethod);

    setDate(editTransaction.date);

  }

}, [editTransaction]);

  const addTransaction = () => {

    if (
  description === "" ||
  amount === "" ||
  category === "" ||
  paymentMethod === "" ||
  date === ""
) {
  toast.error("Please fill all fields!");
  return;
}

  const newTransaction = {
  id: Date.now(),
  description: description.trim(),
  amount:
["Salary"].includes(category)
? Number(amount)
: -Math.abs(Number(amount)),
  category,
  paymentMethod,
  date,
};

if (editTransaction) {

  const updatedTransactions = transactions.map((item) =>

    item.id === editTransaction.id
      ? {
          ...newTransaction,
          id: editTransaction.id,
        }
      : item
  );

  setTransactions(updatedTransactions);

  setEditTransaction(null);

  toast.success("Transaction updated successfully!");

} else {

  setTransactions([...transactions, newTransaction]);

  toast.success("Transaction added successfully!");

}

  setDescription("");
  setAmount("");
  setCategory("");
  setPaymentMethod("");
  setDate("");
};
  return (
    <div className="form-container">
      <h2>
  {editTransaction
    ? "✏️ Update Transaction"
    : "➕ Add Transaction"}
</h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="" disabled>
    📂 Select Category
  </option>
<option value="Food">🍕 Food</option>
<option value="Shopping">🛍 Shopping</option>
<option value="Travel">🚗 Travel</option>
<option value="Salary">💼 Salary</option>
<option value="Bills">💡 Bills</option>
<option value="Entertainment">🎬 Entertainment</option>
<option value="Health">🏥 Health</option>
<option value="Education">📚 Education</option>
<option value="Fuel">⛽ Fuel</option>
<option value="Gift">🎁 Gift</option>
<option value="Rent">🏠 Rent</option>
<option value="Other">📦 Other</option>

</select>

<select
value={paymentMethod}
onChange={(e)=>setPaymentMethod(e.target.value)}
>

<option value="" disabled>

💳 Payment Method

</option>

<option value="UPI">📱 UPI</option>

<option value="Cash">💵 Cash</option>

<option value="Debit Card">💳 Debit Card</option>

<option value="Credit Card">💳 Credit Card</option>

<option value="Net Banking">🏦 Net Banking</option>

<option value="Wallet">👛 Wallet</option>

</select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={addTransaction}>

  {editTransaction

    ? "Update Transaction"

    : "Add Transaction"}

</button>
    </div>
  );
}

export default TransactionForm;