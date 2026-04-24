function ActiveFilterChips({ searchTerm, setSearchTerm, location, setLocation, remoteOnly, setRemoteOnly, filters, setFilters }) {
  
  const removeType = (value) => {
    setFilters((prev) => ({ ...prev, types: prev.types.filter((v) => v !== value) }));
  };

  const removeLevel = (value) => {
    setFilters((prev) => ({ ...prev, levels: prev.levels.filter((v) => v !== value) }));
  };

  const removeCategory = (value) => {
    setFilters((prev) => ({ ...prev, categories: prev.categories.filter((v) => v !== value) }));
  };

  const hasFilters =
    searchTerm || location || remoteOnly ||
    filters.types.length > 0 ||
    filters.levels.length > 0 ||
    filters.categories.length > 0;

  if (!hasFilters) return null;

  return (
    <div className="active-chips">

      {searchTerm && (
        <span className="chip">
          🔍 {searchTerm}
          <button onClick={() => setSearchTerm("")}>✕</button>
        </span>
      )}

      {location && (
        <span className="chip">
          📍 {location}
          <button onClick={() => setLocation("")}>✕</button>
        </span>
      )}

      {remoteOnly && (
        <span className="chip">
          Remote only
          <button onClick={() => setRemoteOnly(false)}>✕</button>
        </span>
      )}

      {filters.types.map((type) => (
        <span key={type} className="chip">
          {type}
          <button onClick={() => removeType(type)}>✕</button>
        </span>
      ))}

      {filters.levels.map((level) => (
        <span key={level} className="chip">
          {level}
          <button onClick={() => removeLevel(level)}>✕</button>
        </span>
      ))}

      {filters.categories.map((cat) => (
        <span key={cat} className="chip">
          {cat}
          <button onClick={() => removeCategory(cat)}>✕</button>
        </span>
      ))}

    </div>
  );
}

export default ActiveFilterChips;