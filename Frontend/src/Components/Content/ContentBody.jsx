import css from '../styles/ContentBody.module.css'
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import TimeAgo from 'javascript-time-ago'
import {Link, useNavigate} from 'react-router'
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

TimeAgo.addLocale(en)
TimeAgo.addLocale(ru)
import ReactTimeAgo from 'react-time-ago'
const ContentBody=({blogItem,handleSingleBlogPost,setBlogContent})=>{
    const navigate=useNavigate();

    const onClickEventSinglePost=async(event)=>{
        event.preventDefault();
        
        const fetchedData=await fetch('http://localhost:3000/user/profile',{
            method:'GET',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })
        console.log(fetchedData.status)
        if(fetchedData.status===401 || fetchedData.status===500){
            alert('You have to login first !');
        }else if(fetchedData.status===400){
            alert('Can upvote only once');
        }else{
            handleSingleBlogPost(blogItem);
            navigate('/singleBlog');  
        }
    }

    const handleUpvote=async(blogItem)=>{
        const fetchedData=await fetch('http://localhost:3000/blog/upVoteBlog',{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
            body:JSON.stringify({
                id:blogItem._id
            })
        })
        console.log(fetchedData.status);
        if(fetchedData.status===401 || fetchedData.status===500){
            alert('You need to login first !');
        }else if(fetchedData.status===400){
            alert('You can upvote only once')
        }else{
            setBlogContent('All');
        }
    }

    const handleDownvote=async(blogItem)=>{
        const fetchedData=await fetch('http://localhost:3000/blog/downVoteBlog',{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
            body:JSON.stringify({
                id:blogItem._id
            })
        })

        if(fetchedData.status===401 || fetchedData.status===500){
            alert('You have to login first !');
        }else if(fetchedData.status===400){
            alert('You can downVote only once');
        }else{
            setBlogContent('All');
        }
    }

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
                    <p className="lead mb-0"><Link to="/singleBlog" className="text-body-emphasis"
                        onClick={onClickEventSinglePost}
                    >Continue reading...</Link></p>
                    </div>
                    <div style={{display:"flex",marginTop:"2%",gap:"5%"}}>
                        <div><BiUpvote size={25} onClick={()=>handleUpvote(blogItem)}/>{blogItem.noOfUpVotes}</div> 
                        <div><BiDownvote size={25} onClick={()=>handleDownvote(blogItem)}/>{blogItem.noOfDownVotes}</div>          
                    </div>
                </div>

                <div className={`rounded text-body-emphasis bg-body-secondary ${css.imageDiv}`}>
                    <img src={'http://localhost:3000/'+blogItem.coverFilePath} className="img-fluid" alt="..."/>
                </div>
            </div>
        </>
    )
}

export default ContentBody;