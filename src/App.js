import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [someData, setSomeData] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/brands");
      setSomeData(data.brands);
      console.log(data);
    })();
  }, []);

  return (
    <>
      {someData.map((items) => (
        <img src={items.image} alt="" />
      ))}
    </>
  );
}

export default App;
