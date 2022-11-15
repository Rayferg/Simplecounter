import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SimpleCounter = () => {
	const [count, setCount]=useState(0)
	console.log(count)
	setTimeout(()=>{
		setCount(count=>count+1)
	}, 1000)
	let number=Math.floor(count/1000)
	let one=Math.floor(count/100)
	let two=Math.floor(count/10)
let three=Math.floor(count/1)
	return (
		<div className="bigCounter">
		  <div className="calender">
			<i class="fa fa-clock" aria-hidden="true"></i>
		  </div>
		  <div className="four">{number%10}</div>
		  <div className="one">{one%10}</div>
		  <div className="two">{two%10}</div>
		  <div className="three">{three%10}</div>
		</div>
	  );
};

export default SimpleCounter;
