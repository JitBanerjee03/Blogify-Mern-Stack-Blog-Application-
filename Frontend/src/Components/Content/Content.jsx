import { useContext } from "react";
import { profileContext } from "../../../store/ContextProvider";
import ContentBody from "./ContentBody";

const Content=()=>{
    const {blogContent,handleSingleBlogPost}=useContext(profileContext);
    return (
        <>
            {blogContent.map((blogItem)=>{
                return(
                    <ContentBody blogItem={blogItem} handleSingleBlogPost={handleSingleBlogPost}/>
                )
            })}
        </>
    )
}

export default Content