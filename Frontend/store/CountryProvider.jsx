import { createContext, useEffect, useState } from "react";

export const countryContext=createContext({
    countryList:[]
})

const CountryProvider=({children})=>{
    
    const [countryList,setCountryList]=useState();
    
    useEffect(()=>{
        const handleCountryList=async()=>{
            const fetchedData=await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');

            const responseData=await fetchedData.json();
            const {data}=responseData;
            setCountryList(data);
        }

        handleCountryList();        
    },[]);

    return(
        <>
            <countryContext.Provider value={{countryList}}>
                {children}
            </countryContext.Provider>
        </>
    )
}

export default CountryProvider;