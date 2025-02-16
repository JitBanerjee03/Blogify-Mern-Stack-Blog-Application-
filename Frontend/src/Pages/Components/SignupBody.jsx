import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from './styles/SignupBody.module.css';
import StateSignup from "./StateSignup";
import CitySignUp from "./CitySignUp";

const SignUpBody=({countryList})=>{

    const navigate=useNavigate(); 

    const fname=useRef('');
    const mname=useRef('');
    const lname=useRef('');
    const email=useRef('');
    const country=useRef('');
    const state=useRef('');
    const city=useRef('');
    const zip=useRef();
    const dbirth=useRef();
    const password=useRef('');
    const comfirmPassword=useRef('');
    
    const [stateList,setStateList]=useState();
    const [cityList,setCityList]=useState();
    const addNewUser=async(event)=>{
        event.preventDefault();
        if(password.current.value===comfirmPassword.current.value){
            const fetchedData=await fetch('http://localhost:3000/user/signup',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    firstName: fname.current.value,
                    middleName: mname.current.value,
                    lastName: lname.current.value,
                    email: email.current.value,
                    country: countryList[country.current.value].name,
                    State: state.current.value,
                    city: city.current.value,
                    zip: zip.current.value,
                    dob: dbirth.current.value,
                    password: password.current.value
                })
            })
            if(fetchedData.status===500){
                alert('Email already exists');
            }else{
                alert('You have been registered successfully')  
                navigate('/login');
            }
        }else{
            alert('password Invalid');
        }
    }
    
    const handleCountryOnChange=()=>{
        console.log(country.current.value);
        setStateList(countryList[country.current.value].states);
    }

    return(
        <>
            <div style={{marginBottom:"10%"}}>
                <div className={`${css.outerFormDiv}`}>
                <center>
                    <h2 style={{marginBottom:"2%"}}>Sign Up</h2>
                </center>
                <form className="row g-3 needs-validation" noValidate onSubmit={addNewUser}>
                <div className="col-md-4" style={{marginBottom:"1%"}}>
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input ref={fname} type="text" className="form-control" id="validationCustom01" required/>
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4" style={{marginBottom:"1%"}}>
                    <label htmlFor="validationCustom02" className="form-label">Middle name</label>
                    <input ref={mname} type="text" className="form-control" id="validationCustom02" required/>
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4" style={{marginBottom:"1%"}}>
                    <label htmlFor="validationCustom03" className="form-label">Last name</label>
                    <input ref={lname} type="text" className="form-control" id="validationCustom03" required/>
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4" style={{marginBottom:"1%"}}>
                    <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                    <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input ref={email} type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                    </div>
                </div>
    
                <div className="col-md-4" style={{marginBottom:"1%"}}>
                    <label htmlFor="validationCustom04" className="form-label">Country</label>
                    <select ref={country} className="form-select" id="validationCustom04" required onChange={handleCountryOnChange}>
                    <option selected disabled value="">Choose...</option>
                    {
                        countryList.map((country,index)=>{
                            return <option value={index}>{country.name}</option>
                        })
                    }
                    </select>
                    <div className="invalid-feedback">
                    Please select a valid country.
                    </div>
                </div>
                
                <StateSignup countryList={countryList} country={country} setCityList={setCityList} stateList={stateList} state={state}/>
                <CitySignUp cityList={cityList} city={city}/>
                {/*<div className="col-md-4" style={{marginBottom:"1%"}}>
                    <label htmlFor="validationCustom06" className="form-label">City</label>
                    <input ref={city} type="text" className="form-control" id="validationCustom06" required/>
                    <div className="invalid-feedback">
                    Please provide a valid city.
                    </div>
                </div>*/}
                
                <div className="col-md-4" style={{marginBottom:"1%"}}>
                    <label htmlFor="validationCustom07" className="form-label">Zip</label>
                    <input ref={zip} type="Number" className="form-control" id="validationCustom07" required/>
                    <div className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
                <div className="col-md-4" style={{marginBottom:"1%"}}>
                    <label htmlFor="validationCustom08" className="form-label">Date of Birth</label>
                    <input ref={dbirth} type="date" className="form-control" id="validationCustom08" required/>
                    <div className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
    
                <div className="col-md-4" style={{marginBottom:"1%"}}>
                    <label htmlFor="validationCustom09" className="form-label">Password</label>
                    <input ref={password} type="password" className="form-control" id="validationCustom09" required/>
                    <div className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
                <div className="col-md-4" style={{marginBottom:"1%"}}>
                    <label htmlFor="validationCustom10" className="form-label">Confirm Password</label>
                    <input ref={comfirmPassword} type="password" className="form-control" id="validationCustom010" required/>
                    <div className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
    
                <div className="col-12" style={{marginBottom:"1%"}}>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                    <label className="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Register</button>
                </div>
                </form>
            </div>
            </div>
        </>
    )
}

export default SignUpBody;