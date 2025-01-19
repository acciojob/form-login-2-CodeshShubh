//your JS code here. If required.



const btn = document.getElementById('btn');

btn.addEventListener('click',(e)=>{
	e.preventDefault();
	const firstName = document.getElementById('First Name').value;
const lastName = document.getElementById('Last Name').value;
const phoneNumber = document.getElementById('Phone Number').value;
const emailID = document.getElementById('Email ID').value;
	alert(`
	   First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailID}      `)
})

