import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import SalarySlider from "../components/SalarySlider";
import ActiveFilterChips from "../components/ActiveFilterChips";
import JobCard from "../components/JobCard";
import useJobFilter from "../hooks/useJobFilter";

function HomePage() {
  const {
    searchTerm, setSearchTerm,
    location, setLocation,
    remoteOnly, setRemoteOnly,
    minSalary, setMinSalary,
    maxSalary, setMaxSalary,
    filters, setFilters,
    filteredJobs,
  } = useJobFilter();

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Find Your Dream Job</h1>
        <p>Search thousands of jobs across New Zealand and remote worldwide</p>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        location={location}
        setLocation={setLocation}
        remoteOnly={remoteOnly}
        setRemoteOnly={setRemoteOnly}
      />

      <div className="main-layout">
        <aside className="sidebar">
          <FilterPanel filters={filters} setFilters={setFilters} />
          <SalarySlider
            minSalary={minSalary}
            maxSalary={maxSalary}
            setMinSalary={setMinSalary}
            setMaxSalary={setMaxSalary}
          />
        </aside>

        <main className="job-results">
          <ActiveFilterChips
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            location={location}
            setLocation={setLocation}
            remoteOnly={remoteOnly}
            setRemoteOnly={setRemoteOnly}
            filters={filters}
            setFilters={setFilters}
          />

          <p className="results-count">
            {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} found
          </p>

          <div className="job-list">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <p className="no-results">No jobs found. Try adjusting your filters!</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;