import Loader from "../../Components/Loader/Loader";

const StateSignup=({countryList,country,setCityList,stateList,state})=>{
    //const [cityList,setCityList]=useState();

    const handleStateOnChange=async()=>{
        console.log(state.current.value);

        const fetchedData=await fetch('https://countriesnow.space/api/v0.1/countries/state/cities',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({
                "country":countryList[country.current.value].name,
                state:state.current.value
            })
        })

        const responseData=await fetchedData.json();

        console.log(responseData.data);

        setCityList(responseData.data);
    }

    return (
        <>
            {
                Array.isArray(stateList) ? <div className="col-md-4" style={{marginBottom:"1%"}}>
                    <label htmlFor="validationCustom05" className="form-label">State</label>
                    
                    <select ref={state} className="form-select" id="validationCustom05" required
                        onChange={handleStateOnChange}
                    >
                    <option selected disabled value="">Choose...</option>
                    {
                        stateList.map((state)=>{
                            return <option value={state.name}>{state.name}</option>
                        })
                    }
                    </select>
                    <div className="invalid-feedback">
                    Please select a valid state.
                    </div>
                </div> 
                :null
            }

            {/*
                Array.isArray(cityList) ? <CitySignUp cityList={cityList} city={city}/> : null
            */}
        </>
    )
}

export default StateSignup;