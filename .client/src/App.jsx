import React, { useState } from "react";
import './app.css';

function App() {
  const [formData, setFormData] = useState({
    label1: "",
    label2: "",
  });

  const [response, setResponse] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
      setResponse({ error: "Failed to send data" });
    }
  };

  return (
    <div className="p-5 m-5">
      <div>testApp is running...</div>
      <div>
        <form action="" method="post">
          <div>
            <label htmlFor="">Email</label><input type="email" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Massege</label><input type="text" name="" id="" /></div>
          <div><button type="submit">Sunmit</button></div>
        </form>
      </div>
    </div>
  );
}

export default App;
