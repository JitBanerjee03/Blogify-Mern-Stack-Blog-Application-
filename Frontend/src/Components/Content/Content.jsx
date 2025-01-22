import { useContext } from "react";
import { profileContext } from "../../../store/ContextProvider";
import ContentBody from "./ContentBody";

const Content=()=>{
    const {blogContent}=useContext(profileContext);
    return (
        <>
            {blogContent.map((blogItem)=>{
                return(
                    <ContentBody blogItem={blogItem}/>
                )
            })}
        </>
    )
}

export default Content