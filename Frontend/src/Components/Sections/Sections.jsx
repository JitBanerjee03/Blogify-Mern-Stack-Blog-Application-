import { useContext } from "react"
import { profileContext } from "../../../store/ContextProvider"

const Sections=()=>{
    const {Categories}=useContext(profileContext);

    return(
        <>
            <div className="container">
            <div className="nav-scroller py-1 mb-3 border-bothrefm">
                <nav class="nav nav-underline justify-content-between">
                {Categories.map((blogType)=>{
                    return (
                        <a class="nav-item nav-link link-body-emphasis" href="#">{blogType}</a>
                    )
                })}
                </nav>
            </div>
            </div>
        </>
    )
}

export default Sections 