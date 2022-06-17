import React, { useState } from "react"; //useState is a hook

export default function Textarea(props) {
  const handleupClicked = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercse!", "success");
  };

  const handleloClicked = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed!", "success");
  };

  const handleCapitle = () => {
    var splitStr = text.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    let hello = splitStr.join(" ");
    setText(hello);
    props.showAlert("Capitalization has been done!", "success");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading1}</h2>
        <textarea
          value={text}
          onChange={handleOnchange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#04274",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control my-3"
          placeholder="Enter text here"
          id="myBox"
          rows="7"
        ></textarea>
        <button disabled={text.length===0}
          type="button"
          onClick={handleupClicked}
          className="btn btn-outline-info mx-1 my-1  "
        >
          ToUpperCase
        </button>
        <button disabled={text.length===0}
          type="button"
          onClick={handleloClicked}
          className="btn btn-outline-info mx-1 my-1  "
        >
          ToLowerCase
        </button>

        <button disabled={text.length===0}
          type="button"
          onClick={handleCapitle}
          className="btn btn-outline-info mx-1 my-1  "
        >
          ToCapital
        </button>

        <button disabled={text.length===0}
          type="button"
          onClick={handleCopy}
          className="btn btn-outline-info mx-1 my-1  "
        >
          Copy Text
        </button>

        <button disabled={text.length===0}
          type="button"
          onClick={handleExtraSpace}
          className="btn btn-outline-info mx-1 my-1  "
        >
          Remove Extra Spaces
        </button>

        <button disabled={text.length===0}
          type="button"
          onClick={handleClear}
          className="btn btn-outline-warning mx-1 my-1 "
        >
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading2}</h2>
        <p>
          There are <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and{" "}
          <b>{text.length}</b> characters in your text.{" "}
        </p>
        <h4>Preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
