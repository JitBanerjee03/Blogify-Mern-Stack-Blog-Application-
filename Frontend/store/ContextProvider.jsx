import { createContext, useEffect, useReducer, useState } from "react";

export const profileContext=createContext([{
  User:'', 
  validUser:()=>{},
  LogOutMethod:()=>{},
  Categories:[{}],
  setBlogContent:()=>{},
  blogContent:[{}],
  curCategory:String,
  handleSingleBlogPost:()=>{},
  curSingleBlogPost:{},
  userDetails:{},
  handleUserDetail:()=>{}
}])

const ContextProvider=({children})=>{
    const [User,setUser]=useState('');
    
    const [Categories,setCategories]=useState([]);
    
    const [curCategory,setCurCategory]=useState('All');
    
    const [curSingleBlogPost,setSingleBlogPost]=useState({});

    const handleSingleBlogPost=(blog)=>{
        setSingleBlogPost(blog);
    }
    
    const changeCurCategory=(category)=>{
        setCurCategory(category);
    }

    const getAllBlogs=async()=>{
        const fetchedData=await fetch('http://localhost:3000/blog/getAllBlogs',{
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })

        const responseData=await fetchedData.json();
        return responseData;
    }

    const getCategoryBlogs=async(category)=>{
        const fetchedData=await fetch(`http://localhost:3000/blog/getAllBlogs/${category}`,{
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })

        const responseData=await fetchedData.json();
        return responseData;
    }

    const reducerBlogContent=(curstate,action)=>{
        if(action.type==='All'){
            return action.payLoad;
        }else{
            return action.payLoad;
        }      
    }
    
    const [blogContent,dispatchBlogContent]=useReducer(reducerBlogContent,[]);

    const setBlogContent=async(blogType)=>{
        changeCurCategory(blogType);        
        if(blogType==='All'){
            const actionObj={
                type:'All',
                payLoad:await getAllBlogs()
            }
            dispatchBlogContent(actionObj);
        }else{
            const actionObj={
                type:blogType,
                payLoad:await getCategoryBlogs(blogType)
            }
            dispatchBlogContent(actionObj);
        }
    }

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
        
        const setInitialBlogPost=async()=>{
            const fetchedData=await fetch('http://localhost:3000/blog/getAllBlogs',{
                headers:{'Content-Type':'application/json'},
                credentials:'include',
            })

            const responseData=await fetchedData.json();

            const actionObj={
                type:'All',
                payLoad:responseData
            }

            dispatchBlogContent(actionObj);
        }

        setAllCategories();
        setInitialBlogPost();
    },[])

    const validUser=async()=>{

        const fetchedData=await fetch('http://localhost:3000/user/profile',{
            method:'GET',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })
        console.log(fetchedData.status);
        if(fetchedData.status!==200 || fetchedData.status===500){
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

    const [userDetails,setUserDetails]=useState();

    const handleUserDetail=async()=>{
        const fetchedData=await fetch('http://localhost:3000/user/getUser',{
            method:'GET',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })

        const responseData=await fetchedData.json();

        setUserDetails(responseData);
    }

    return <profileContext.Provider value={{User,validUser,LogOutMethod,Categories,setBlogContent,blogContent,curCategory,handleSingleBlogPost,curSingleBlogPost,userDetails,handleUserDetail}}>
        {children}
    </profileContext.Provider>
}

export default ContextProvider;