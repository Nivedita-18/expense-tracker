function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="category-filter">

      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
      >

        <option value="All">
          📂 All Categories
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

    </div>
  );
}

export default CategoryFilter;