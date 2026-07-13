import "./SearchFilter.css";

function SearchFilter({ search, setSearch }) {
  return (
    <section className="search-filter">
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-buttons">
        <button className="active">All</button>
        <button>Beach</button>
        <button>Mountain</button>
        <button>City</button>
        <button>Adventure</button>
        <button>Luxury</button>
      </div>
    </section>
  );
}

export default SearchFilter;