import { useContext } from "react";
import { profileContext } from "../../../store/ContextProvider";
import css from './styles/SingleBlogPost.module.css'
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

TimeAgo.addLocale(en)
TimeAgo.addLocale(ru)
import ReactTimeAgo from 'react-time-ago'

const SingleBlogPost=()=>{
    const {curSingleBlogPost}=useContext(profileContext);
    return(
        <>
            <div className={`p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary ${css.blogContentOuterDiv}`}>
                <div className={`${css.contentDiv}`}>
                    <div className="col-lg-10 px-0">
                    <h3 className="display-6 fst-italic">{curSingleBlogPost.title}</h3>
                    <div style={{marginTop:"5%",display:'flex'}}>
                        <p style={{fontSize:"1.2rem"}}><ReactTimeAgo date={curSingleBlogPost.postedAt}/> by </p>
                        <p style={{marginLeft:"2%",fontSize:"1.2rem"}}>{curSingleBlogPost.postedBy.firstName}</p>
                    </div>
                    <p className="lead my-3">{curSingleBlogPost.summary}</p>
                    </div>
                    <div style={{display:"flex",marginTop:"2%",gap:"5%"}}>
                        <div><BiUpvote size={25}/>{curSingleBlogPost.noOfUpVotes}</div> 
                        <div><BiDownvote size={25}/>{curSingleBlogPost.noOfDownVotes}</div>            
                    </div>
                </div>

                <div className={`rounded text-body-emphasis bg-body-secondary ${css.imageDiv}`}>
                    <img src={'http://localhost:3000/'+curSingleBlogPost.coverFilePath} class="img-fluid" alt="..."/>
                </div>
            </div>

            <div className={`p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary`} style={{marginLeft:"10%",marginRight:"10%"}}>
                <div dangerouslySetInnerHTML={{ __html: curSingleBlogPost.content }} />
            </div>
        </>
    )
}

export default SingleBlogPost;