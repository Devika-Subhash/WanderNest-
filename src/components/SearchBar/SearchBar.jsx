import "./SearchBar.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="search-bar">

      <div className="search-item">
        <label><span><FaMapMarkerAlt />Destination</span></label>
        <input
          type="text"
          placeholder="Enter city or country"
        />
      </div>

      <div className="search-item">
        <label> <FaCalendarAlt />Check In</label>
        <input type="date" />
      </div>

      <div className="search-item">
        <label><FaCalendarAlt />Check Out</label>
        <input type="date" />
      </div>

      <div className="search-item">
        <label><FaUsers />
         Guests</label>

        <select>
            
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4+ Guests</option>
        </select>
      </div>

      <button className="search-btn">
         <FaSearch />Search
      </button>

    </div>
  );
}

export default SearchBar;