import React from 'react';

function Bold({bold,bold1,setBold,setBold1}) {
  return <div className="flex flex-wrap ml-8 mt-7">
  <div className=" ml-3  text-lg font-medium">Font Weight Bold:</div>
  <div className="block ml-5">

  <label className="inline-flex items-center">
    <input type="checkbox" className="w-6 h-6 text-green-500 border-0 rounded-md focus:ring-0" checked={bold} onChange={()=>{setBold(!bold);}} />
    <span className="ml-2">Upper</span>
  </label>

</div>

<div className="block ml-5">

  <label className="inline-flex items-center">
    <input type="checkbox" className="w-6 h-6 text-green-500 border-0 rounded-md focus:ring-0" checked={bold1} onChange={()=>{setBold1(!bold1);}} />
    <span className="ml-2">Bottom</span>
  </label>

</div>
</div>
;
}

export default Bold;
