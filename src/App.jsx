import { useState , useEffect } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import ExpenseChart from "./components/ExpenseChart";
import Statistics from "./components/Statistics";
import ExportCSV from "./components/ExportCSV";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecentActivity from "./components/RecentActivity";
import CategoryFilter from "./components/CategoryFilter";
import DateFilter from "./components/DateFilter";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions =
    localStorage.getItem("transactions");
    
    return savedTransactions
    ? JSON.parse(savedTransactions)
    : [];

});

const [editTransaction, setEditTransaction] = useState(null);
const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");
const [dateFilter, setDateFilter] = useState("All");
const [darkMode, setDarkMode] = useState(false);


useEffect(() => {

  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );

}, [transactions]);

  return (
    
    <div className={darkMode ? "app dark" : "app"}>
  <div className="container">
      <Header
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>
      <Balance transactions={transactions} />
      <SummaryCards transactions={transactions} />

      <TransactionForm
  transactions={transactions}
  setTransactions={setTransactions}
  editTransaction={editTransaction}
  setEditTransaction={setEditTransaction}
/>

      <SearchBar
  search={search}
  setSearch={setSearch}
/>

<CategoryFilter
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>

<DateFilter
  dateFilter={dateFilter}
  setDateFilter={setDateFilter}
/>

<TransactionList
  transactions={transactions}
  setTransactions={setTransactions}
  search={search}
  selectedCategory={selectedCategory}
  dateFilter={dateFilter}
  setEditTransaction={setEditTransaction}
/>

<ExpenseChart
  transactions={transactions}
/>
<Statistics
  transactions={transactions}
/>

<RecentActivity
  transactions={transactions}
/>

<ExportCSV
  transactions={transactions}
/>
<ToastContainer
  position="top-right"
  autoClose={2500}
  theme="colored"
/>
    
      <Footer />
      </div>

    </div>
  );
}

export default App;

