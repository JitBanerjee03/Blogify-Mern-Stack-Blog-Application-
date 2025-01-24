import { useContext } from 'react'
import Header from '../Components/Header/Header'
//import css from './styles/SignUp.module.css'

import Footer from '../Components/Footer/Footer';
import { countryContext } from '../../store/CountryProvider';
import Loader from '../Components/Loader/Loader';
import SignUpBody from './Components/SignupBody';

const SignUp=()=>{

    const {countryList}=useContext(countryContext);

    return(
    <>
        <Header/>
        {!Array.isArray(countryList) ? <Loader/> : <SignUpBody countryList={countryList}/>}
        <Footer/>
    </>
    )
}

export default SignUp;