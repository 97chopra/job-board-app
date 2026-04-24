function SearchBar({ searchTerm, setSearchTerm, location, setLocation, remoteOnly, setRemoteOnly }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by job title, skill or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <input
        type="text"
        placeholder="Location e.g. Auckland, NZ"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="location-input"
      />

      <label className="remote-toggle">
        <input
          type="checkbox"
          checked={remoteOnly}
          onChange={(e) => setRemoteOnly(e.target.checked)}
        />
        Remote only
      </label>
    </div>
  );
}

export default SearchBar;