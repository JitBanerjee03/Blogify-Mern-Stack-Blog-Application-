import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { profileContext } from "../../../store/ContextProvider";
import { Link } from "react-router-dom";

const Header=()=>{
    const navigate=useNavigate();
    
    const {User,LogOutMethod,handleUserDetail}=useContext(profileContext);

    const goToLoginPage=()=>{
        navigate('/login');
    }
    
    const goToSignUpPage=()=>{
        navigate('/SignUp');
    }
    
    const logOut=async()=>{
        const validUser=async()=>{

            const fetchedData=await fetch('http://localhost:3000/user/logout',{
                method:'GET',
                headers:{'Content-Type':'application/json'},
                credentials:'include',
            })
    
            if(fetchedData.status!==200 && fetchedData.status!==500){
                console.log("You are not a valid user!");
            }else if(fetchedData.status===200){
                LogOutMethod()
            }
        }

        validUser();
    }
    
    const addNewBlog=()=>{
        navigate('addBlog');
    }
    
    const handleUserDetailOnClick=async(event)=>{
        event.preventDefault();

        await handleUserDetail();

        navigate('/userInfo');
    }
    return (
        <>
            <div style={{backgroundColor:"#e5eaf5"}}>
            <header className="border-bothrefm lh-1 py-4" style={{paddingLeft:"8%",paddingRight:"8%"}}>
                    <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="row flex-nowrap col-4">
                        <img src='/blog.png' style={{width:"20%",height:"20%"}}
                            onClick={()=>navigate('/')}
                        />
                        <span>
                            <h2 style={{marginRight:"10%"}}>Blogify</h2>  
                        </span>
                    </div>
                        {User.length!==0?
                        <div style={{marginLeft:"48%",display:"flex",gap:"1.5%"}}>
                            <Link to='/userInfo' style={{textAlign:"center",textDecoration:"none"}}
                                onClick={handleUserDetailOnClick}
                            ><h2 style={{color:"black"}}>{User}</h2></Link>
                            <button type="button" className="btn btn-secondary" onClick={addNewBlog}>Add Blog</button>
                            <button type="button" className="btn btn-secondary" onClick={()=>logOut()}>Log Out</button>
                        </div>
                        :
                        <div className="col-4 d-flex justify-content-end align-items-center" style={{gap:"12px"}}>
                            <button type="button" className="btn btn-secondary" onClick={()=>goToLoginPage()}>Login</button>
                            <button type="button" className="btn btn-secondary" onClick={()=>goToSignUpPage()}>Signup</button>
                        </div>
                        }
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header