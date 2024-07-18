import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, Box, Typography } from "@mui/material";
function Form() {
	// name 
	// email
	// age 
	// gender 
	// phone number 
	// location
	// favourite media platform 
	// and fav platform handle
	const [formValues, setFormValues] = useState({
		firstName: "",
		lastName: "",
		age: "",
		phoneNumber: "",
		email: "",
		gender: "",
		location: "",
		favouriteMediaPlatform: "",
		favouriteMPhandle: "",
		oftenPlayGames: ""
	});


	const handleLand = () => {
		// e.preventDefault();
		// const { name, value } = e.target;
		// setFormValues({
		//   ...formValues,
		//   [name]: value,
		// });
	};

	const formArr = [
		{
			_id: "323",
			type: "text",
			placeholder: "first name",
			onChange: handleLand,
			name: "FirstName",
			labelText: "First Name",
			value: formValues.firstName,
			helper: "Add your firstname"
		},
		{
			_id: "32kjfjd3",
			type: "text",
			placeholder: "last name",
			onChange: handleLand,
			name: "lastName",
			labelText: "Last Name",
			value: formValues.lastName,
			helper: "Add your lastname"
		},
		{
			_id: "wdids",
			type: "number",
			placeholder: "age",
			onChange: handleLand,
			name: "age",
			labelText: "Age",
			value: formValues.age,
			helper: "what is your age group?"
		},

		{
			_id: "323hd",
			type: "email",
			placeholder: "@gmail.com",
			onChange: handleLand,
			name: "email",
			labelText: "Email",
			value: formValues.email,
			helper: "Add your email"
		},
		{
			_id: "33423",
			type: "text",
			placeholder: "Location",
			onChange: handleLand,
			name: "location",
			labelText: "Location",
			value: formValues.location,
			helper: "Add your location"
		},
		{
			_id: "323KKDhd",
			type: "text",
			placeholder: "e.g city...",
			onChange: handleLand,
			name: "favouriteMediaPlatform",
			labelText: "Favourite social media platform",
			value: formValues.favouriteMediaPlatform,
			helper: "what your best social media platform?"
		},

		{
			_id: "323KjsjdDhd",
			type: "text",
			placeholder: "e.g x.com",
			onChange: handleLand,
			name: "favouriteMediaPlatform",
			labelText: "Favourite  platform handle",
			value: formValues.favouriteMediaPlatform,
			helper: "Add your handle"
		},




		{
			_id: "33jdjd423",
			type: "text",
			placeholder: "+234...",
			onChange: handleLand,
			name: "price",
			labelText: "Tel No",
			value: formValues.phoneNumber,
			helper: "Add your phone number"
		},


		{
			_id: "323kwdkdjjdjsids",
			type: "select",
			placeholder: "status",
			onChange: handleLand,
			name: "status",
			labelText: "How often do you play games",
			value: formValues.oftenPlayGames,
			helper: "select how often",
			options: [
				{
					text: "Daily",
					value: "daily",
				},
				{
					text: "Weekly",
					value: "weekly",
				},
				{
					text: "Monthly",
					value: "monthly",
				},
				{
					text: "Less than monthly",
					value: "lessThanMonthly",
				},
			],
		},


	];

	return (
		<StyledForm>
			<header className='formHeader'>
				<Typography component="h1" align='center' variant="h5" className="hdhd">

					<div className="glitch-wrapper_form">
						<div className="glitch_form" data-text="Welcome to Legacy Gaming Community!">Welcome to Legacy Gaming Community!</div>
					</div>
				</Typography>
			</header>
			<form className="registration-form">

				{formArr.map((item) => {

					return (
						<TextField
							id={item._id}
							type={item.type}
							key={item._id}
							sx={{
								marginTop: "20px",
							}}
							label={item.labelText}
							name={item.name}
							onChange={handleLand}
							helperText={item.helper}
						/>
					);
				})}

			</form>
		</StyledForm>
	)
}

export default Form


const StyledForm = styled.section`


   .registration-form{
	padding:30px 0px 30px 0px;
	width: 50%;
    display: flex;
    margin: auto;
    flex-direction: column;
   }
   

  .formHeader{
	background-color: red;
	width:70%;
	margin:auto;
  }

  .glitch-wrapper_form {
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   background-color: #000000;
}

.glitch_form {
   position: relative;
   font-family:"Poppins";
   font-size: 30px;
   font-weight: bold;
   text-shadow: 1px 1px pink;
   color: #CE9934;
   letter-spacing: 1px;
   animation: shift 4s ease-in-out infinite alternate;
   transform: skewX(0deg);
   z-index: 1;
}

@keyframes shift {
   0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
      transform: skewX(0deg);
   }
   41% {
      transform: skewX(10deg);
   }
   42% {
      transform: skewX(-10deg);
   }
   59% {
      transform: skewX(35deg) skewY(10deg);
   }
   60% {
      transform: skewX(-35deg) skewY(-10deg);
   }
   63% {
      transform: skewX(10deg) skewY(-5deg);
   }
   70% {
      transform: skewX(-30deg) skewY(-20deg);
   }
   71% {
      transform: skewX(10deg) skewY(-10deg);
   }
}



`