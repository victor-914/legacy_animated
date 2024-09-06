import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
function Form() {

	const [formValues, setFormValues] = useState({
		firstname: "",
		lastname: "",
		age: "",
		tel: "",
		email: "",
		// gender: "",
		location: "",
		social_handle: "",
		frequency: "",
		// favouriteGame: ""
	});


	const handleComForm = (e: { preventDefault: () => void; target: { name: any; value: any; }; }) => {
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
			onChange: handleComForm,
			name: "firstname",
			labelText: "first name",
			value: formValues.firstname,
			helper: "Add your firstname"
		},
		{
			_id: "32kjfjd3",
			type: "text",
			placeholder: "last name",
			onChange: handleComForm,
			name: "lastname",
			labelText: "last name",
			value: formValues.lastname,
			helper: "Add your lastname"
		},



		{
			_id: "32wedjids",
			type: "select",
			placeholder: "Age group",
			onChange: handleComForm,
			name: "age",
			labelText: "Age group",
			value: formValues.age,
			helper: "What is your age group",
			options: [
				{
					text: "10-15",
					value: "a10-15",
				},
				{
					text: "16-20",
					value: "a16-20",
				},
				{
					text: "20-25",
					value: "a20-25",
				},
				{
					text: "26-30",
					value: "a26-30",
				},
				{
					text: "31-above",
					value: "a31-above",
				},

			],
		},

		{
			_id: "323hd",
			type: "email",
			placeholder: "@gmail.com",
			onChange: handleComForm,
			name: "email",
			labelText: "Email",
			value: formValues.email,
			helper: "Add your email"
		},
		{
			_id: "33423",
			type: "text",
			placeholder: "Location",
			onChange: handleComForm,
			name: "location",
			labelText: "location",
			value: formValues.location,
			helper: "Add your location"
		},
		{
			_id: "323KKDhd",
			type: "text",
			placeholder: "e.g city...",
			onChange: handleComForm,
			name: "social_handle",
			labelText: "Social platform",
			value: formValues.social_handle,
			helper: "what your active social platform?"
		},

		

		{
			_id: "33jdjd423",
			type: "number",
			placeholder: "+234...",
			onChange: handleComForm,
			name: "tel",
			labelText: "Tel No",
			value: formValues.tel,
			helper: "Add your phone number"
		},

		{
			_id: "323kwdkdjjdjsids",
			type: "select",
			placeholder: "status",
			onChange: handleComForm,
			name: "frequency",
			labelText: "How often do you play games",
			value: formValues.frequency,
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
					value: "less than monthly",
				},
			],
		},

	


	];

	const handleSubmit = async () => {

		if ( formValues.frequency  === "" || formValues.age  === "") {
			toast("Empty fields")
			return
		}


		try {
			const res = await axios.post(`http://ec2-13-51-65-133.eu-north-1.compute.amazonaws.com/api/communities`, { data: formValues });


			if (res.status === 200) {
				toast("successful")
				setFormValues({
					firstname: "",
					lastname: "",
					age: "",
					tel: "",
					email: "",
					location: "",
					social_handle: "",
					frequency: "",
				})
			}
		} catch (error) {
			console.log("🚀 ~ handleSubmit ~ error:", error)
			if (error) {
				toast("error")
			}
		}
	};

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
								onChange={handleComForm}
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
							onChange={handleComForm}
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
	cursor: pointer;
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