import React from 'react';
import { ColorPicker } from "react-color-palette";
function Ftcolor({hid,setHid,hid1,setHid1,color,color1,setColor,setColor1}) {
  return   <div className=" ml-8 mt-5">
    <div className=" ml-3  text-lg font-medium">Font Color:</div>
    <div className="flex flex-wrap">
  <div>
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 mx-5 px-4 rounded"
    onClick={() => {
      setHid(!hid);
    }}
  >
    Upper
  </button>
  <div className={`${hid ? "hidden" : "block"} m-2`}>
    <ColorPicker 
      width={456}
      height={228}
      color={color}
      onChange={setColor}
      hideHSV
      dark
    />
    
  </div>
</div>

<div>
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded mx-5"
    onClick={() => {
      setHid1(!hid1);
    }}
  >
    Bottom
  </button>
  <div className={`${hid1 ? "hidden" : "block"} m-2`}>
    <ColorPicker
      width={456}
      height={228}
      color={color1}
      onChange={setColor1}
      hideHSV
      dark
    />
    
  </div>
  </div>
  </div>
</div>;
}

export default Ftcolor;
