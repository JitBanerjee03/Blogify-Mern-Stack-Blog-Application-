import css from '../styles/ContentBody.module.css'
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)
import ReactTimeAgo from 'react-time-ago'
const ContentBody=({blogItem})=>{
    return(
        <>
            <div className={`p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary ${css.blogContentOuterDiv}`}>
                <div className={`${css.contentDiv}`}>
                    <div className="col-lg-10 px-0">
                    <h3 className="display-6 fst-italic">{blogItem.title}</h3>
                    <div style={{marginTop:"5%",display:'flex'}}>
                        <p style={{fontSize:"1.2rem"}}><ReactTimeAgo date={blogItem.postedAt}/> by </p>
                        <p style={{marginLeft:"2%",fontSize:"1.2rem"}}>{blogItem.postedBy.firstName}</p>
                    </div>
                    <p className="lead my-3">{blogItem.summary}</p>
                    <p className="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue reading...</a></p>
                    </div>
                    <div style={{display:"flex",marginTop:"2%",gap:"5%"}}>
                        <div><BiUpvote size={25}/>{blogItem.noOfUpVotes}</div> 
                        <div><BiDownvote size={25}/>{blogItem.noOfDownVotes}</div>            
                    </div>
                </div>

                <div className={`rounded text-body-emphasis bg-body-secondary ${css.imageDiv}`}>
                    <img src={'http://localhost:3000/'+blogItem.coverFilePath} class="img-fluid" alt="..."/>
                </div>
            </div>
        </>
    )
}

export default ContentBody;