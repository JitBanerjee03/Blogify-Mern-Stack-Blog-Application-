import { useContext, useRef, useState } from "react";
import css from './styles/AddBlog.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaFileUpload } from "react-icons/fa";
import { profileContext } from "../../../store/ContextProvider";
import { useNavigate } from "react-router-dom";

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

const AddBlog=()=>{
    
    const navigate=useNavigate();
    const {Categories,setBlogContent}=useContext(profileContext);
    
    const Title=useRef();
    const Summary=useRef();
    const Category=useRef();
    const content=useRef();
    
    const [fileData,setFileData]=useState();

    const onSubmitHandle=(event)=>{
        event.preventDefault();

        const formData=new FormData();

        formData.set('Title',Title.current.value);
        formData.set('Summary',Summary.current.value);
        formData.set('Category',Category.current.value);
        formData.set('fileData',fileData);
        formData.set('Content',content.current.value);

        const postingDatainBackEnd=async()=>{
            const fetchedData=await fetch('http://localhost:3000/blog/postBlog',{
                method:'POST',
                credentials:'include',
                body:formData
            })

            if(fetchedData.status===401){
                alert('Unauthorised Access !');
            }else if(fetchedData.status===500){
                alert('Internal error from the server !')
            }else{
                const responseData=await fetchedData.json();
                alert('Blog added Successfully !');
                setBlogContent('All');
            }
        }
        postingDatainBackEnd();
        navigate('/');
    }


    return(
        <>
            <div className={`${css.FormDivStyle}`}>
            <form onSubmit={onSubmitHandle}>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label"><h6>Title</h6></label>
                    <div class="col-sm-10">
                    <input ref={Title} type="text" class="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="text" class="col-sm-2 col-form-label"><h6>Summary</h6></label>
                    <div class="col-sm-10">
                    <input ref={Summary} type="text" class="form-control" id="inputPassword3"/>
                    </div>
                </div>
                
                <div class="row mb-3">
                <label for="inputState" class="col-sm-2 col-form-label"><h6>Category</h6></label>
                    <div className="col-sm-10">
                        <select ref={Category} id="inputState" class="form-select">
                            <option defaultValue=''></option> 
                            {Categories.map((itemCategory)=>{
                                return(
                                    <option>{itemCategory.categoryType}</option>    
                                )
                            })}
                        </select>
                    </div>
                </div>
                
                <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02" 
                    onChange={(event)=>setFileData(event.target.files[0])}
                />
                <label class="input-group-text" for="inputGroupFile02"><FaFileUpload /></label>
                </div>
                <ReactQuill ref={content} theme="snow" modules={modules} formats={formats}/>
                <button type="submit" class={`btn btn-success ${css.btnClass}`}>Add Post</button>
                </form>
            </div>
        </>
    )
}

export default AddBlog;