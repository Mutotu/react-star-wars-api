import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Links from "./Links";

const Pages = (props) => {
  const [load, setLoad] = useState(null);
  const { id } = useParams();

  const getData = async () => {
    try {
      const urlData = await axios(`https://www.swapi.tech/api/starships/${id}`);
      // console.log(urlData);
      setLoad(urlData);
      // console.log(load);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const createCard = () => {
    return (
      <div>
        <ul>
          <li>Name : {load.data.result.properties.name}</li>
          <li>Desciption: {load.data.result.description}</li>
          <li>Model: {load.data.result.properties.model}</li>
          <li>Manufacturer: {load.data.result.properties.manufacturer}</li>
          <li>Passengers:{load.data.result.properties.passengers}</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Pages</h1>
      <Links />
      {!load ? null : createCard()}
    </div>
  );
};

export default Pages;
