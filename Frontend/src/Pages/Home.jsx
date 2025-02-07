import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { profileContext } from "../../store/ContextProvider";
import { useContext, useState } from "react";
import Content from "../Components/Content/Content";
const Home=()=>{
        const {Categories,setBlogContent,curCategory,blogContent}=useContext(profileContext);
        
        const handleCatagory=(event,category)=>{
            event.preventDefault();
            setBlogContent(category);
            console.log(blogContent);
        }
    return(
        <>
            {
                Categories.length===0 ? <Loader/> : 
                <div>
                <Header/>
                    <div className="container">
                    <div className="nav-scroller py-1 mb-3 border-bothrefm">
                        <nav className="nav nav-underline justify-content-between">
                        <a className={`nav-item nav-link link-body-emphasis ${curCategory==='All' && 'active'}`} href="#" onClick={(event)=>handleCatagory(event,'All')}>All</a>
                        {Categories.map((blogType)=>{
                            return (
                                <a className={`nav-item nav-link link-body-emphasis ${curCategory===blogType.categoryType ? 'active' : null}`} href="#" onClick={(event)=>handleCatagory(event,blogType.categoryType)}>{blogType.categoryType}</a>
                            )
                        })}
                        </nav>
                    </div>
                    <Content/>
                    </div>
                <Footer/>
                </div>
            }
        </>
    )
}

export default Home