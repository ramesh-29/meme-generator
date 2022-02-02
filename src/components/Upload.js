import React from 'react';

function Upload({setFile}) {
  return <div className="mb-3 ml-12">

<form className="flex items-center space-x-6">
          <label className="block">
    {/* <span className="sr-only">Choose meme photo</span> */}
    <input type="file" onChange={e=>{setFile(e.target.files[0])}} className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
</form>

  </div>;
}

export default Upload;
