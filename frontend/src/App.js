import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const req = await fetch("http://localhost:5000/api/users");
      const res = await req.json();
      console.log(res);
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
      {data && data.map((el) => <div>{el.name}</div>)}
    </div>
  );
}

export default App;
