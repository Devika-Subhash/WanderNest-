import "./SearchFilter.css";

function SearchFilter({ search, setSearch, category,
  setCategory,}) {
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
        <button className={category === "All" ? "active" : ""}onClick={() => setCategory("All")}>All</button>
        <button className={category === "Beach" ? "active" : ""}onClick={() => setCategory("Beach")}>Beach</button>
        <button className={category === "Mountain" ? "active" : ""}onClick={() => setCategory("Mountain")}>Mountain</button>
        <button className={category === "City" ? "active" : ""}onClick={() => setCategory("City")}>City</button>
        <button className={category === "Adventure" ? "active" : ""}onClick={() => setCategory("Adventure")}>Adventure</button>
        <button className={category === "Luxury" ? "active" : ""}onClick={() => setCategory("Luxury")}>Luxury</button>
      </div>
    </section>
  );
}

export default SearchFilter;