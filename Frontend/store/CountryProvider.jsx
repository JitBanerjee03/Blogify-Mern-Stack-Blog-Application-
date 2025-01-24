import { createContext, useEffect, useState } from "react";

export const countryContext=createContext({
    countryList:[],
    stateList:[],
    setCurStateList:()=>{}
})

const CountryProvider=({children})=>{
    
    const [countryList,setCountryList]=useState();
    const [stateList,setStateList]=useState();

    useEffect(()=>{
        const handleCountryList=async()=>{
            const fetchedData=await fetch('https://countriesnow.space/api/v0.1/countries/states');

            const responseData=await fetchedData.json();
            const {data}=responseData;
            setCountryList(data);
        }

        handleCountryList();        
    },[]);
    
    const setCurStateList=(index)=>{
        const state=countryList[index].states;
        console.log('Hi');
        setStateList(state);
    }

    return(
        <>
            <countryContext.Provider value={{countryList,stateList,setCurStateList}}>
                {children}
            </countryContext.Provider>
        </>
    )
}

export default CountryProvider;