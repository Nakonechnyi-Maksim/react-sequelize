import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [data, setData] = useState(null);
  const [val, setVal] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  useEffect(() => {
    // if (val) {
    const body = {
      name: val,
    };
    async function fetchData() {
      const url = new URL("http://176.100.124.148:5000/api/someUsers");

      //Для перебора если несколько ключ/значений
      // Object.keys(body).forEach((key) =>
      //   url.searchParams.append(key, body[key])
      // );

      url.searchParams.append("name", body.name);
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
    // }
  }, [val]);

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
