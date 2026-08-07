import React, { useEffect, useState } from "react";

function TextForm(props) {
  const handlUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handlclearClick = () => {
    let newText = "";

    setText(newText);
    alert("Text Cleared");
  };

  const handlCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("Text Copied");
  };

  const handleChange = (event) => {
    // console.log("onchsnge wer");

    setText(event.target.value);
  };
  const [text, setText] = useState("");

  //   useEffect(() => {
  //     alert("weel come");
  //   }, []);

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="container  mb-3">
        <textarea
          onChange={handleChange}
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <div className="my-4">
          <button
            onClick={handlUpClick}
            type="button"
            className="btn btn-primary mx-1"
          >
            Convert to Uppercase
          </button>
          <button
            onClick={handlLowClick}
            type="button"
            className="btn btn-primary mx-1"
          >
            Convert to Lowrercase
          </button>
          <button
            onClick={handlclearClick}
            type="button"
            className="btn btn-primary mx-1"
          >
            Clear Text
          </button>
          <button
            onClick={handlCopyClick}
            type="button"
            className="btn btn-primary mx-1"
          >
            Copy Text
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your text summery</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
