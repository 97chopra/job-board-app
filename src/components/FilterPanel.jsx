const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
const levels = ["Entry", "Mid", "Senior"];
const categories = ["Technology", "Design", "Data & AI", "Marketing", "Finance"];

function FilterPanel({ filters, setFilters }) {
  const toggle = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const clearAll = () => {
    setFilters({ types: [], levels: [], categories: [] });
  };

  return (
    <div className="filter-panel">

      <div className="filter-group">
        <h4>Job Type</h4>
        {jobTypes.map((type) => (
          <button
            key={type}
            className={`filter-btn ${filters.types.includes(type) ? "active" : ""}`}
            onClick={() => toggle("types", type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <h4>Experience Level</h4>
        {levels.map((level) => (
          <button
            key={level}
            className={`filter-btn ${filters.levels.includes(level) ? "active" : ""}`}
            onClick={() => toggle("levels", level)}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <h4>Category</h4>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filters.categories.includes(cat) ? "active" : ""}`}
            onClick={() => toggle("categories", cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <button className="clear-btn" onClick={clearAll}>
        Clear all filters
      </button>

    </div>
  );
}

export default FilterPanel;