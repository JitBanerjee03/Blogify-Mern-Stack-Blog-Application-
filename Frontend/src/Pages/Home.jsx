import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { profileContext } from "../../store/ContextProvider";
import { useContext } from "react";

const Home=()=>{
        const {Categories}=useContext(profileContext);
    return(
        <>
            <Header/>
                <div className="container">
                <div className="nav-scroller py-1 mb-3 border-bothrefm">
                    <nav className="nav nav-underline justify-content-between">
                    <a className="nav-item nav-link link-body-emphasis" href="#">All</a>
                    {Categories.map((blogType)=>{
                        return (
                            <a className="nav-item nav-link link-body-emphasis" href="#">{blogType.categoryType}</a>
                        )
                    })}
                    </nav>
                </div>
                </div>
            <Footer/>
        </>
    )
}

export default Home