import { useState } from "react";
import css from './styles/AddBlog.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaFileUpload } from "react-icons/fa";

const AddBlog=()=>{
    const [value, setValue] = useState('');

    return(
        <>
            <div className={`${css.FormDivStyle}`}>
            <form >
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label"><h6>Title</h6></label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="text" class="col-sm-2 col-form-label"><h6>Summary</h6></label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3"/>
                    </div>
                </div>
                
                <div class="row mb-3">
                <label for="inputState" class="col-sm-2 col-form-label"><h6>Category</h6></label>
                    <div className="col-sm-10">
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                
                <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02"/>
                <label class="input-group-text" for="inputGroupFile02"><FaFileUpload /></label>
                </div>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
                <button type="button" class={`btn btn-success ${css.btnClass}`}>Add Post</button>
                </form>
            </div>
        </>
    )
}

export default AddBlog;