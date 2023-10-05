import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="container vh-100 d-flex align-items-center justify-content-center">
			<div className="row">
				<h1 className="col-2 bg-dark text-white justify-content-center p-4"> <i class="far fa-clock"></i> </h1>
				<h1 className="col-2 bg-dark text-white justify-content-center p-4"> {props.num5} </h1>
				<h1 className="col-2 bg-dark text-white justify-content-center p-4">  {props.num4} </h1>
				<h1 className="col-2 bg-dark text-white justify-content-center p-4">  {props.num3} </h1>
				<h1 className="col-2 bg-dark text-white justify-content-center p-4">  {props.num2} </h1>
				<h1 className="col-2 bg-dark text-white justify-content-center p-4">  {props.num1} </h1>
			</div>
		</div>
	);
};

export default Home;
