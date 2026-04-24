import { useState, useMemo } from "react";
import jobs from "../data/jobs";

function useJobFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [minSalary, setMinSalary] = useState(30000);
  const [maxSalary, setMaxSalary] = useState(150000);
  const [filters, setFilters] = useState({
    types: [],
    levels: [],
    categories: [],
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {

      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation =
        location === "" ||
        job.location.toLowerCase().includes(location.toLowerCase());

      const matchesRemote = !remoteOnly || job.remote === true;

      const matchesType =
        filters.types.length === 0 || filters.types.includes(job.type);

      const matchesLevel =
        filters.levels.length === 0 || filters.levels.includes(job.level);

      const matchesCategory =
        filters.categories.length === 0 ||
        filters.categories.includes(job.category);

      const matchesSalary =
        job.salary.min >= minSalary && job.salary.max <= maxSalary;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesRemote &&
        matchesType &&
        matchesLevel &&
        matchesCategory &&
        matchesSalary
      );
    });
  }, [searchTerm, location, remoteOnly, filters, minSalary, maxSalary]);

  return {
    searchTerm, setSearchTerm,
    location, setLocation,
    remoteOnly, setRemoteOnly,
    minSalary, setMinSalary,
    maxSalary, setMaxSalary,
    filters, setFilters,
    filteredJobs,
  };
}

export default useJobFilter;