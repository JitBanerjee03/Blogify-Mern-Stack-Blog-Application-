const StateSignup=({stateList,state})=>{
    return (
        <>
            <div className="col-md-4" style={{marginBottom:"1%"}}>
                <label htmlFor="validationCustom05" className="form-label">State</label>
                
                {Array.isArray(stateList) ? <select ref={state} className="form-select" id="validationCustom05" required>
                <option selected disabled value="">Choose...</option>
                {
                    stateList.map((state)=>{
                        return <option value={state.name}>{state.name}</option>
                    })
                }
                </select> : null}
                <div className="invalid-feedback">
                Please select a valid state.
                </div>
            </div>
        </>
    )
}

export default StateSignup;