import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";

const StarWars = (props) => {
  const [search, setSearch] = useState("");
  const [filteredShips, setFilteredShips] = useState([]);

  const saveData = async (ship) => {
    try {
      const save = await axios.post("http://localhost:3002/favShip", {
        name: ship,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const filterShips = () => {
    const filtered = props.data.filter((ship) => {
      return ship.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredShips(filtered);
  };

  useEffect(() => {
    filterShips();
  }, [search, props.clicked]);

  return (
    <div>
      <h1>Ships</h1>
      <SearchBar search={search} setSearch={setSearch} />
      {filteredShips.map((ship, i) => {
        return (
          <div>
            <Link to={`/ships/${ship.uid}`}>
              <div className='ships'>
                {ship.name}
                <button
                  className='btn'
                  disabled={props.clicked[ship.name]}
                  onClick={(e) => {
                    e.preventDefault();
                    e.target.disabled = true;
                    props.clicked[ship.name] = true;
                    saveData(ship.name);
                  }}
                >
                  Save
                </button>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default StarWars;
