import axios from "axios";
import { useState, useEffect } from "react";

const SavedShips = (props) => {
  const [saveShips, setSaveShips] = useState([]);

  const [load, setLoad] = useState(true);

  const getData = async () => {
    try {
      const data = await axios("http://localhost:3002/favShip");
      setSaveShips(data.data.favShip);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteData = async (item) => {
    props.clicked[item] = false;
    try {
      const deleted = await axios.delete(
        `http://localhost:3002/favShip/${item}`
      );
      setLoad(true);
    } catch (err) {
      console.log(err);
    }
  };

  const renderList = () => {
    return (
      <div>
        {saveShips.map((item, i) => {
          return (
            <div key={i} className='savedships'>
              <p>Name: {item.name}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  deleteData(item.name);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    if (load) {
      getData();
      setLoad(false);
    }
  }, [deleteData]);

  return (
    <div>
      SavedShips
      {renderList()}
    </div>
  );
};

export default SavedShips;
