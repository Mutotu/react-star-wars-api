import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import StarWars from "./components/StarWars";
import Pages from "./components/Pages";
import { useState, useEffect } from "react";
import Links from "./components/Links";
import SavedShips from "./components/SavedShips";

function App() {
  const [data, setData] = useState([]);
  const clicked = {};

  const getShipData = async () => {
    try {
      const getData = await axios("https://www.swapi.tech/api/starships");

      let arr = getData.data.results;
      setData(arr);
      for (let i in arr) {
        clicked[arr[i].name] = false;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getShipData();
  }, []);

  return (
    <div className='App'>
      <Links />

      <Routes>
        <Route
          path='/ships/'
          element={<StarWars data={data} clicked={clicked} />}
        />
        <Route path='/ships/:id' element={<Pages data={data} />} />
        <Route
          path='/ships/myships'
          element={<SavedShips clicked={clicked} />}
        />
      </Routes>
    </div>
  );
}

export default App;
