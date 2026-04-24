function SalarySlider({ minSalary, maxSalary, setMinSalary, setMaxSalary }) {
  return (
    <div className="salary-slider">
      <h4>Salary Range</h4>

      <div className="salary-display">
        <span>${minSalary.toLocaleString()}</span>
        <span>—</span>
        <span>${maxSalary.toLocaleString()}</span>
      </div>

      <div className="slider-group">
        <label>Min Salary</label>
        <input
          type="range"
          min={30000}
          max={150000}
          step={5000}
          value={minSalary}
          onChange={(e) => setMinSalary(Number(e.target.value))}
          className="slider"
        />
      </div>

      <div className="slider-group">
        <label>Max Salary</label>
        <input
          type="range"
          min={30000}
          max={150000}
          step={5000}
          value={maxSalary}
          onChange={(e) => setMaxSalary(Number(e.target.value))}
          className="slider"
        />
      </div>
    </div>
  );
}

export default SalarySlider;