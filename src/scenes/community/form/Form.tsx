import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from "@mui/material";
function Form() {

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
		oftenPlayGames: "",
		favouriteGame: ""
	});


	const handleLand = (e: { preventDefault: () => void; target: { name: any; value: any; }; }) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});

	};

	const formArr = [
		{
			_id: "323",
			type: "text",
			placeholder: "first name",
			onChange: handleLand,
			name: "firstName",
			labelText: "first name",
			value: formValues.firstName,
			helper: "Add your firstname"
		},
		{
			_id: "32kjfjd3",
			type: "text",
			placeholder: "last name",
			onChange: handleLand,
			name: "lastName",
			labelText: "last name",
			value: formValues.lastName,
			helper: "Add your lastname"
		},
	


		{
			_id: "32wedjids",
			type: "select",
			placeholder: "Age group",
			onChange: handleLand,
			name: "age",
			labelText: "Age group",
			value: formValues.age,
			helper: "What is your age group",
			options: [
				{
					text: "10-15",
					value: "10-15",
				},
				{
					text: "16-20",
					value: "16-20",
				},
				{
					text: "20-25",
					value: "20-25",
				},
				{
					text: "26-30",
					value: "26-30",
				},
				{
					text: "31-above",
					value: "31-above",
				},

			],
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
			labelText: "location",
			value: formValues.location,
			helper: "Add your location"
		},
		{
			_id: "323KKDhd",
			type: "text",
			placeholder: "e.g city...",
			onChange: handleLand,
			name: "favouriteMediaPlatform",
			labelText: "Favourite social platform",
			value: formValues.favouriteMediaPlatform,
			helper: "what your active social platform?"
		},

		{
			_id: "323KjsjdDhd",
			type: "text",
			placeholder: "e.g x.com",
			onChange: handleLand,
			name: "favouriteMediaPlatform",
			labelText: "what your social handle",
			value: formValues.favouriteMediaPlatform,
			helper: "Add your social handle"
		},

		{
			_id: "33jdjd423",
			type: "number",
			placeholder: "+234...",
			onChange: handleLand,
			name: "phoneNumber",
			labelText: "Tel No",
			value: formValues.phoneNumber,
			helper: "Add your phone number"
		},

		{
			_id: "323kwdkdjjdjsids",
			type: "select",
			placeholder: "status",
			onChange: handleLand,
			name: "oftenPlayGames",
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

		{
			_id: "323KKDhjjdjwd",
			type: "text",
			placeholder: "e.g city...",
			onChange: handleLand,
			name: "favouriteGame",
			labelText: "Favourite game",
			value: formValues.favouriteGame,
			helper: "what is your favourite game?",
		}


	];

	const handleSubmit = () => {
		console.log(formValues)
	}

	return (
		<StyledForm>

			<form className="registration-form">

				{formArr.map((item) => {

					if (item.type === "select" && item.options) {
						return (
							<TextField
								id={item._id}
								select
								type={item.type}
								key={item._id}
								sx={{
									marginTop: "20px",
								}}
								label={item.labelText}
								SelectProps={{
									native: true,
								}}
								name={item.name}
								onChange={handleLand}
							>
								{item?.options?.map((option) => (
									<option key={option.value} value={option.value}>
										{option.text}
									</option>
								))}
							</TextField>
						)
					}

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

			<aside className="submitContainer">

				<button onClick={handleSubmit} type='submit'>
					submit
				</button>
			</aside>
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
	width:70%;
	margin:auto;
  }

  .submitContainer{
	width:50%;
	margin: auto;
	height: 10vh;
	display:flex;
	align-items: center;
	justify-content: center;
  }

  .submitContainer button{
	padding:8px;
	background-color: #000000;
	font-size:20px;
	border-radius:8px;
	outline: none;
	border:none;
	color:#fff;
	text-transform: uppercase;
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





@media (max-width: 575.98px) {

.registration-form{
	width:90%;
 }

}




@media (min-width: 576px) and (max-width: 767px) {

 .registration-form{
	width:90%;
 }

}


@media (min-width: 766px) and (max-width: 991.98px) {



.registration-form{
	width:90%;
 }


}


@media (min-width: 992px) and (max-width: 1199.98px) {

.registration-form{
	width:90%;
 }


}


/* @media (min-width: 1200px) {
background-color: #CE9934;


} */




`