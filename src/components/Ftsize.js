import React from 'react';

function Ftsize({fontsize,fontsize1,setfontSize,setfontSize1}) {
  return <div className="ml-10 mt-5 ">
      <div className=" ml-3  text-lg font-medium">Font Size:</div>
      <div className=" flex flex-wrap">
      <div className="font-medium">Upper:
 <input
        type="number"
        value={fontsize}
        className="border-solid border-2 border-black-600 w-20 mx-3 mb-2"
        onChange={(e) => setfontSize(e.target.value)}
      /></div>
     <div className="font-medium"> Bottom:
      <input
        type="number"
        value={fontsize1}
        className="border-solid border-2 border-black-600 w-20 mx-2 mb-3"
        onChange={(e) => setfontSize1(e.target.value)}
      /></div>
      </div>
  </div>;
}

export default Ftsize;
