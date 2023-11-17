import React, { useState } from "react";


export default function Textform(props) {
 
    


  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleDownClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleCopyClick = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
   
    {props.showAlert("Text Copied", "success")}
    
  };
  
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");
  return (
    <>
      <div>
        <div
          className="mb-3 my-5"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <label for="myBox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
           placeholder="Enter Your Text"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "lightgrey" : "white",
              color: props.mode === "dark" ? "black" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          Copy the Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        
      </div>
      <div className="container my-2">
        <h1>Your Text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} character 
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes required to read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
