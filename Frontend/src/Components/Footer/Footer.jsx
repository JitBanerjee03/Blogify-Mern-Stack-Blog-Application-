import { useContext } from "react";

const Footer=()=>{
    return(
        <>
            <div style={{backgroundColor:"#304146",color:"white"}}>
                <div className="container">
                <footer className="py-5">
                    <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Travel</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Technology</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Design</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Culture</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Business</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Politics</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Opinion</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Science</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Health</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Style</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0" style={{color:"white"}}>About</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly digest of what's new and exciting from us.</p>
                        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                            <button className="btn btn-primary" type="button">Subscribe</button>
                        </div>
                        </form>
                    </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© 2024 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
                    </ul>
                    </div>
                </footer>
                </div>
            </div>
        </>
    )
}

export default Footer;
