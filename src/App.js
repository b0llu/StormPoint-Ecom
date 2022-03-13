import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Footer, Sidebar } from "./Components";

function App() {
  const [someData, setSomeData] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("/api/products");
      setSomeData(data.products);
      console.log(data);
    })();
  }, []);

  return (
    <>
      {someData.map((items) => (
        <h1>{items.title}</h1>
      ))}
      <Sidebar/>
    </>
  );
}

export default App;
