import { useContext, useRef } from "react";
import Header from "../Components/Header/Header";
import css from './styles/Login.module.css'
import { useNavigate } from "react-router-dom";
import { profileContext } from "../../store/ContextProvider";
import Footer from "../Components/Footer/Footer";
const Login=()=>{
    const userName=useRef('');
    const password=useRef('');
    const navigate=useNavigate();

    const {validUser}=useContext(profileContext);

    const LoginUser=async(event)=>{
        event.preventDefault();

        const fetchedData=await fetch('http://localhost:3000/user/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
            body:JSON.stringify({
                email:userName.current.value,
                password:password.current.value
            })
        })
        
        const isOk=await fetchedData.json();
        if(isOk.message==='ok'){
            validUser();
            navigate('/');   
        }else{
            alert('Invalid Credentials!'); 
        }
    }

    return<>
        <div style={{marginBottom:"10%"}}>
            <Header/>
            <div className={`${css.outerFormDiv}`}>
            <form onSubmit={(event)=>LoginUser(event)}>
                   <img src='/blog.png' style={{marginTop:"5%",width:"20%",height:"20%"}}/>
                    
                    <center>
                        <h2 style={{marginBottom:"10%"}}>Sign Up</h2>
                    </center>

                    <div className={`form-floating ${css.EmailPasswordDiv}`}>
                    <input ref={userName} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div class={`form-floating ${css.EmailPasswordDiv}`}>
                    <input ref={password} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-body-secondary">© 2024–2026</p>
                </form>
            </div>
        </div>
        <Footer/>
    </>
}

export default Login;