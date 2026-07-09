function DateFilter({ dateFilter, setDateFilter }) {
  return (
    <div className="date-filter">
      <select
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      >
        <option value="All">📅 All Time</option>
        <option value="Today">📆 Today</option>
        <option value="Month">📅 This Month</option>
        <option value="Year">🗂 This Year</option>
      </select>
    </div>
  );
}

export default DateFilter;