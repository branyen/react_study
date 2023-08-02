import React, { useState } from "react";
import styles from "./styles.module.css"

export default function Gradient(){

	const[color1,setColor1]=useState("#00F260");
	const[color2,setColor2]=useState("#0575E6");

	function handleInputChange(e){
		const{name,value}=e.target;
		if(name=="color1"){
			setColor1(value);
		}
		if(name=="color2"){
			setColor2(value);
		}
	}

	function handleClick(){
		setColor1("#00F260");
		setColor2("#0575E6")

	}
	return(
		<div className={styles.container} style={{background:`linear-gradient(75deg,${color1},${color2})`}}>
			<div className={styles.inputGroup}>
				<label>左の背景色を選んで</label>
				<input type="color" 
				value={color1}
				name="color1" 
				className={styles.inputColor}
				onChange={handleInputChange}
				/>
			</div>
			<div className={styles.inputGroup}>
			      <label>右の背景色を選んで</label>
				<input type="color" 
				value={color2} 
				name="color2" 
				className={styles.inputColor} 
				onChange={handleInputChange}
				/>
			</div>
			<button onClick={handleClick} className={styles.button}>最初に戻す</button>
		</div>
	)
}


