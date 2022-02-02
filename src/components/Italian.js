import React from 'react';

function Italian({italian,italian1,setItalian,setItalian1}) {
  return <div className="flex flex-wrap ml-8">
  <div className=" ml-3 mt-3 text-lg font-medium">Font Style Italic:</div>
  <div className="block ml-5">
<div className="mt-3">
  <label className="inline-flex items-center">
    <input type="checkbox" className="w-6 h-6 text-green-500 border-0 rounded-md focus:ring-0" checked={italian} onChange={()=>{setItalian(!italian);}} />
    <span className="ml-2">italian1</span>
  </label>
</div>
</div>

<div className="block ml-5">
<div className="mt-3 ">
  <label className="inline-flex items-center">
    <input type="checkbox" className="w-6 h-6 text-green-500 border-0 rounded-md focus:ring-0" checked={italian1} onChange={()=>{setItalian1(!italian1);}} />
    <span className="ml-2">italian2</span>
  </label>
</div>
</div>
</div>
;
}

export default Italian;
