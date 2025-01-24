import { useContext } from 'react';
import css from './styles/UserInfo.module.css';
import { profileContext } from '../../store/ContextProvider';

const UserInfo=()=>{
    const {userDetails}=useContext(profileContext);

    console.log(userDetails);
    return(
        <>  <center style={{marginTop:"1.5%"}}><h1>User Info</h1></center>
            <div className={`${css.outerDiv}`}>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    
                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <span><h5>First name</h5></span>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><h6>{userDetails.firstName}</h6></div>
                    </div>
                    </div>

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <h5>Middle name</h5>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><h6>{userDetails.middleName}</h6></div>
                    </div>
                    </div>

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <h5>Last name</h5>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><h6>{userDetails.lastName}</h6></div>
                    </div>
                    </div>

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        <h5>Date of Birth</h5>
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><h6>{new Date(userDetails.dob).toLocaleDateString()}</h6></div>
                    </div>
                    </div>

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        <h5>Nationality</h5>
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><h6>{userDetails.country}</h6></div>
                    </div>
                    </div>

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        <h5>State</h5>
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><h6>{userDetails.State}</h6></div>
                    </div>
                    </div>

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        <h5>City</h5>
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><h6>{userDetails.city}</h6></div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo;