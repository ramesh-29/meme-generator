import React from "react";
function Textadd({text,text1,setText,setText1}) {
  return (<div>
    <div>
    <div className="ml-10  mt-10 text-lg font-medium">Text at the upper:</div>
        <textarea
          className="ml-10 mb-2 border-2 w-5/6 "
          value={text}
          placeholder="Enter text..."
          onChange={(up) => {
            setText(up.target.value);
          }}
          id="uptext"
        />
      </div>

      <div>
      <div className="ml-10  text-lg font-medium">Text at the bottom:</div>
        <textarea
          className=" ml-10 mb-2 border-2 w-5/6"
          placeholder="Enter text..."
          value={text1}
          onChange={(low) => {
            setText1(low.target.value);
          }}
          id="lowtext"
        />
      </div>
      </div>
  );
}

export default Textadd;
