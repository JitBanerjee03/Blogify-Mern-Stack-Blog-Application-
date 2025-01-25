const CitySignUp=({cityList,city})=>{
    return (
        <>
            { !Array.isArray(cityList) ? null :
            <div className="col-md-4" style={{marginBottom:"1%"}}>
                <label htmlFor="validationCustom06" className="form-label">City</label>
                
                <select ref={city} className="form-select" id="validationCustom06" required>
                <option selected disabled value="">Choose...</option>
                {
                    cityList.map((city)=>{
                        return <option value={city}>{city}</option>
                    })
                }</select>
                <div className="invalid-feedback">
                Please select a valid state.
                </div>
            </div> 
            }
        </>
    )
}

export default CitySignUp;