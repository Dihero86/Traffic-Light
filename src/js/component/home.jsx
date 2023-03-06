import React, { useEffect } from "react";
import { useState } from 'react';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const colores={
		red:"",
		yellow:"",
		green:"",
		purple:"",
	}

	const [color,setColor] = useState(colores);
	const [add,setAdd] = useState("");
	
	useEffect(()=>{
		setColor({...colores, green:"selected"})
	},[])
	

	return (
		
			<div className="trafficlight">
				<div className="trafficlighttop" ></div>
				<div className="trafficlightbody" >
					<div className={"redlight " +color.red} onClick={()=>setColor({...colores, red:"selected"})}></div>
					<div className={"yellowlight " +color.yellow} onClick={()=>setColor({...colores, yellow:"selected"})}> </div>
					<div className={"greenlight " +color.green} onClick={()=>setColor({...colores, green:"selected"})}></div>
					<div className={add + color.purple} onClick={()=>setColor({...colores, purple:"selected"})}></div>
				</div>
				<div className="addButton">
				<button onClick={()=>setAdd("purplelight ")} >Agregar Luz</button>
				</div>
			</div>
		
		
	);
};

export default Home;
