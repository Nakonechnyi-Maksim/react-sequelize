import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [data, setData] = useState(null);
  const [val, setVal] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  useEffect(() => {
    if (btnClicked) {
      const body = {
        name: val,
      };
      async function fetchData() {
        const url = new URL("http://localhost:5000/api/someUsers");
        Object.keys(body).forEach((key) =>
          url.searchParams.append(key, body[key])
        );
        const req = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        });
        const res = await req.json();
        console.log(res);
        setData(res);
      }
      fetchData();
      setBtnClicked(false);
    }
  }, [btnClicked]);

  function handleClick() {
    setBtnClicked(true);
  }
  function handleChange(e) {
    setVal(e.target.value);
  }

  return (
    <div className="App">
      <h1>Test</h1>
      <input value={val} onChange={handleChange}></input>
      <button onClick={handleClick}>Click</button>
      {data &&
        data.map((el) => (
          <div>{"Имя: " + el.name + " почта: " + el.email}</div>
        ))}
    </div>
  );
}

export default App;
