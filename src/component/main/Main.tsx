import './main.css';
import Product from './components/Product';
import Feature from './components/Feature';
import { Route, Routes } from 'react-router-dom';
import MarketPlace from './components/MarketPlace';
import Company from './components/Company';
import ScrollToTop from '../scrollToTop/ScrollToTop';
import About from './components/About';
import SignIn from './sign/SignIn';
import SignUp from './sign/SignUp';
function Main() {
    return (
        <div className='Main'>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Product />} />
                <Route path='feature' element={<Feature />} />
                <Route path='market' element={<MarketPlace />} />
                <Route path='company' element={<Company />} />
                <Route path='about' element={<About />} />
                <Route path='sign-up' element={<SignUp />}/>
                <Route path='sign-in' element={<SignIn />} />
            </Routes>
        </div>
    )
}

export default Main
