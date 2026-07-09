function Statistics({ transactions }) {

  const income = transactions.filter(
    item => item.amount > 0
  );

  const expense = transactions.filter(
    item => item.amount < 0
  );

  const highestIncome =
    income.length > 0
      ? Math.max(...income.map(item => item.amount))
      : 0;

  const highestExpense =
    expense.length > 0
      ? Math.max(...expense.map(item => Math.abs(item.amount)))
      : 0;

  const averageExpense =
    expense.length > 0
      ? (
          expense.reduce(
            (total, item) =>
              total + Math.abs(item.amount),
            0
          ) / expense.length
        ).toFixed(2)
      : 0;

  const savings =
    transactions.reduce(
      (total, item) => total + item.amount,
      0
    );

  return (

    <div className="statistics">

      <div className="stat-card">

        <h3>🏆 Highest Expense</h3>

        <p>₹ {highestExpense}</p>

      </div>

      <div className="stat-card">

        <h3>💰 Highest Income</h3>

        <p>₹ {highestIncome}</p>

      </div>

      <div className="stat-card">

        <h3>📉 Average Expense</h3>

        <p>₹ {averageExpense}</p>

      </div>

      <div className="stat-card">

        <h3>💵 Total Savings</h3>

        <p>₹ {savings}</p>

      </div>

    </div>

  );
}

export default Statistics;