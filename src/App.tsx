import { useState } from "react";

const LINE_TOKEN = import.meta.env.VITE_LINE_TOKEN;
const CORS_PROXY = import.meta.env.VITE_CORS_PROXY;

function App() {
  const [message, setMessage] = useState("");

  function handleClick() {
    fetch(`${CORS_PROXY}/https://notify-api.line.me/api/notify`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LINE_TOKEN}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        message: message,
      }),
    }).then((res) => {
      alert(`Status ${res.status}, Message: ${message}`);
    });

    setMessage("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={message} />
      <button onClick={handleClick}>Send</button>
    </>
  );
}

export default App;
