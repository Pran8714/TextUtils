import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setalert] = useState("initialState");
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert("null");
    }, 2000);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "danger");
    }
  };
  return (  
    <>
      <Router >
        <Navbar title="TextUtils" text="About" mode={Mode} toggleMode={toggleMode} />
        <div style={{height:"50px"}}>
        <Alert alert={alert} />
        </div>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}></Route>

            <Route
              path="/"
              element={<Textform showAlert={showAlert} heading="Enter Your Text" mode={Mode} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
