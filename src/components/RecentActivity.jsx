function RecentActivity({ transactions }) {

  const recentTransactions = [...transactions]
    .reverse()
    .slice(0, 5);

  return (
    <div className="recent-activity">

      <h2>🕒 Recent Activity</h2>

      {recentTransactions.length === 0 ? (

        <p>No recent transactions.</p>

      ) : (

        recentTransactions.map((transaction) => (

          <div
            key={transaction.id}
            className="recent-item"
          >

            <strong>
              {transaction.description}
            </strong>

            <span>
              ₹ {Math.abs(transaction.amount)}
            </span>

          </div>

        ))

      )}

    </div>
  );
}

export default RecentActivity;