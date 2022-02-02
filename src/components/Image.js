import { exportComponentAsJPEG} from 'react-component-export-image';
import React, { useRef, useState,useEffect } from "react";
import { useColor } from "react-color-palette";
import Textadd from "./Textadd.js"
import Upload from "./Upload";
import Ftsize from "./Ftsize";
import Ftcolor from "./Ftcolor";
import Bold from "./Bold.js";
import Italian from "./Italian.js";
import "react-color-palette/lib/css/styles.css";
function Image() {
  const [hid, setHid] = useState(true);
  const [hid1, setHid1] = useState(true);
  const [fontsize, setfontSize] = useState(25);
  const [fontsize1, setfontSize1] = useState(25);
  const [color, setColor] = useColor("hex", "#121212");
  const [color1, setColor1] = useColor("hex", "#121212");
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [bold,setBold]= useState(false);
  const [bold1,setBold1]= useState(false);
  const [sfont,setsfont]=useState("normal");
  useEffect(()=>{
      if(bold===true){
          setsfont("bold");
      }else{setsfont("normal");}
  },[bold])
  const [sfont1,setsfont1]=useState("normal");
  useEffect(()=>{
      if(bold1===true){
          setsfont1("bold");
      }else{setsfont1("normal");}
  },[bold1])
  const [italian,setItalian]= useState(false);
  const [italian1,setItalian1]= useState(false);
  const [sfontt,setsfontt]=useState("normal");
  useEffect(()=>{
      if(italian===true){
          setsfontt("italic");
      }else{setsfontt("normal");}
  },[italian])
  const [sfontt1,setsfontt1]=useState("normal");
  useEffect(()=>{
      if(italian1===true){
          setsfontt1("italic");
      }else{setsfontt1("normal");}
  },[italian1])
  const ref=useRef(null);
  return (
    <div>
    <div className="flex flex-wrap">
      <div >
        <div ref={ref} className="relative ">
          <img
            src={(file===null)?"./meme.png":URL.createObjectURL(file)}
            className="img-responsive w-96 h-96 mx-10 mt-10 mb-3"
            alt="img"
          />
          <div
            className={` absolute top-2 left-1/4 w-2/3 `}
            style={{ fontSize: fontsize + "px", color: color.hex ,fontWeight:sfont,fontStyle:sfontt }}
          >
            {text}
          </div>
          <div
            className="absolute bottom-8 left-1/4 w-2/3 "
            style={{ fontSize: fontsize1 + "px", color: color1.hex,fontWeight:sfont1,fontStyle:sfontt1}}
          >
            {text1}
          </div>
        </div>
        <Upload setFile={setFile} /> 
      </div>
      <div>
    <Textadd  text={text} text1={text1} setText={setText} setText1={setText1}  />

   <Ftsize  fontsize={fontsize} fontsize1={fontsize1} setfontSize={setfontSize} setfontSize1={setfontSize1}     />

   <Ftcolor  hid={hid} hid1={hid1} setHid={setHid} setHid1={setHid1} color={color} color1={color1} setColor={setColor} setColor1={setColor1}        />

   <Bold bold={bold} setBold={setBold} bold1={bold1} setBold1={setBold1}   />

   <Italian italian={italian} italian1={italian1} setItalian={setItalian} setItalian1={setItalian1} />
      </div>
    </div>



<div className="w-full flex justify-center items-center mt-8">
  <button onClick={() => exportComponentAsJPEG(ref)} className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focfus:ring-opacity-75 "   >
  Save Image
      </button>
      </div>
 </div>
  );
}

export default Image;
