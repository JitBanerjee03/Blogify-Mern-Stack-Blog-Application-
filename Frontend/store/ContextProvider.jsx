import { createContext, useEffect, useState } from "react";

export const profileContext=createContext([{
  User:'', 
  validUser:()=>{},
  LogOutMethod:()=>{},
  Categories:[{}]
}])

const ContextProvider=({children})=>{
    const [User,setUser]=useState('');
    
    const [Categories,setCategories]=useState([]);

    useEffect(()=>{
        const setAllCategories=async()=>{
            const fetchedData=await fetch('http://localhost:3000/addcategory/',{
                method:'GET',
                headers:{'Content-Type':'application/json'},
                credentials:'include',
            })
             
            if(fetchedData.status===200){
                const responseData=await fetchedData.json();  
                setCategories(responseData);
            }
        }

        setAllCategories();
    },[])

    const validUser=async()=>{

        const fetchedData=await fetch('http://localhost:3000/user/profile',{
            method:'GET',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })

        if(fetchedData.status!==200 && fetchedData.status!==500){
            console.log("You are not a valid user!");
        }else if(fetchedData.status===200){
            const user=await fetchedData.json();
            setUser(user);
        }
    }
    validUser();
    
    const LogOutMethod=()=>{
        setUser('');
    }
    return <profileContext.Provider value={{User,validUser,LogOutMethod,Categories}}>
        {children}
    </profileContext.Provider>
}

export default ContextProvider;