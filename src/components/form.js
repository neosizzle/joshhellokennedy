import { useState } from "react";
import './form.css'
import gif from './pochita-spinning.gif'
import toast, { Toaster } from 'react-hot-toast';

//Component Imports
import NameInput from "./NameInput";
import AgeInput from "./AgeInput";
import CountryInput from "./CountryInput"
import EmailInput from "./EmailInput"
import HpInput from "./HpInput"
import Ads from './YourAds'
// import Trivia from './Trivia'

const iso3166CountryCodes = [
    "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ",
    "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS",
    "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN",
    "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE",
    "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF",
    "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM",
    "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM",
    "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC",
    "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK",
    "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA",
    "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG",
    "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW",
    "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS",
    "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO",
    "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI",
    "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"
];
const genRandomCode = () => {
    return iso3166CountryCodes[Math. floor(Math. random() * iso3166CountryCodes. length)]
}

const Form = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState(null);
	const [country, setCountry] = useState(genRandomCode());
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(1000000000);
	const [savedData, setSavedData] = useState(null);
  
	function nameHandler(e) {
	  const selectedValue = e.target.value;
	  if (selectedValue === "back") {
		// Handle the backspace option: remove the last character from the name.
		const updatedName = name.slice(0, -1);
		setName(updatedName);
	  } else {
		setName((name) => name + selectedValue);
	  }
	}

	// clear all input
	function clearInputs()
	{
		setName("");
		setAge(null);
		setCountry(genRandomCode())
		setEmail("");
		setPhoneNumber(1000000000);
	}
  
	async function submitHandler(e) {
	  console.log(name);
	  console.log(age);
	  console.log(country);
	  console.log(email);
	  console.log(phoneNumber);

	  if (!savedData)
	  {
		const newSave = 
		{
			name,
			age,
			country,
			email,
			phoneNumber
		}
		setSavedData(newSave);

		// clear input
		clearInputs();

		// user notify
		toast('Please confirm your inputs', {
			icon: '🥰',
		  });
	  }
	  else
	  {
		// compare saved data
		const newData =
		{
			name,
			age,
			country,
			email,
			phoneNumber,
		}
		// if correct, yay
		if (JSON.stringify(newData) === JSON.stringify(savedData)) {
			//close the form la
			const newPage = window.open('', '_self');
      		newPage.document.write('<h1>🫚🫚 Thank you for completing our form 🫚🫚</h1>');
      		newPage.document.close();
		}
		else {
			toast('you are WRONG', {
				icon: '🗣',
			  });
			await new Promise(r => setTimeout(r, 2000));
			window.location.reload(true);
			console.clear();
			
		}
	  }
	}


	return (
	<div>
		{/* Toasts */}
		<Toaster />

		<NameInput nameHandler={nameHandler} name={name} />
		<AgeInput age={age} setAge={setAge} />
		<CountryInput country={country} setCountry={setCountry} genRandomCode={genRandomCode} />
		<EmailInput email={email} setEmail={setEmail}/>
		<HpInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
		<Ads/>
		<button onClick={submitHandler}>
			Submit
		</button>
		<img
		onClick={() => {
			if (!savedData)
				return ;

			// check saved results and apply
			setName(savedData.name)
			setAge(savedData.age)
			setCountry(savedData.country)
			setEmail(savedData.email)
			setPhoneNumber(savedData.phoneNumber)
		}}
		alt="haha"
		src={gif} style={{ width: '300px' }}/>

	</div> );
}
 
export default Form;