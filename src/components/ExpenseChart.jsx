import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function ExpenseChart({ transactions }) {
    
    const expenseData = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => {

      const existing = acc.find(
        (entry) => entry.name === item.category
      );

      if (existing) {
        existing.value += Math.abs(item.amount);
      } else {
        acc.push({
          name: item.category,
          value: Math.abs(item.amount),
        });

      }

      return acc;

    }, []);

    const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const monthlyData = months.map((month, index) => {

  const total = transactions
    .filter((transaction) => {

      const date = new Date(transaction.date);

      return (
        transaction.amount < 0 &&
        date.getMonth() === index
      );

    })
    .reduce(
      (sum, transaction) =>
        sum + Math.abs(transaction.amount),
      0
    );

  return {
    month,
    amount: total,
  };

});

   

    const COLORS = [
"#3B82F6",
"#10B981",
"#F59E0B",
"#EF4444",
"#8B5CF6",
"#06B6D4",
"#EC4899",
"#84CC16",
"#F97316",
"#6366F1"
];

    return (
  <div className="chart-container">

    <h2>📊 Expense Analytics</h2>

    {/* Pie Chart */}
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>

        <Pie
          data={expenseData}
          dataKey="value"
          nameKey="name"
          innerRadius={70}
          outerRadius={130}
          paddingAngle={4}
          isAnimationActive={true}
          animationDuration={1500}
          label
        >
          {expenseData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip
          formatter={(value) => [`₹ ${value}`, "Expense"]}
        />

        <Legend
          verticalAlign="bottom"
          height={36}
        />

      </PieChart>
    </ResponsiveContainer>

    {/* Monthly Bar Chart */}

    <h2 style={{ marginTop: "40px" }}>
      📈 Monthly Expenses
    </h2>

    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={monthlyData}>

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Bar
          dataKey="amount"
          fill="#2563eb"
          radius={[8, 8, 0, 0]}
        />

      </BarChart>
    </ResponsiveContainer>

  </div>
);

}

export default ExpenseChart;