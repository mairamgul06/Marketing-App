import { useState } from 'react';
import style from '../styles/home.module.scss';
import icon from '../../../../images/Image (4).png';
function Home() {
    const [close, setClose] = useState(false);
    return (
        <div className={style.Home} id='pricing'>
            <div className="container">
                <div className={style.HomeWrapper}>
                    <h1 className='title'>Build Better Products</h1>
                    <span className='subtitle'>Powerful, self-serve product analytics to help you convert, <br /> engage, and retain more users.</span>
                    <div className={style.HomeFlex}>
                        <button className='btn' onClick={() => setClose(prev => !prev)}>Watch Demo</button>
                        <button className='button'>Sign Up</button>
                    </div>
                    <div className={style.HomeImage}>
                        <img src={icon} alt="home" />
                    </div>
                    {close && (
                        <div className={style.HomeImages} onClick={() => setClose(false)}>
                            <img src={icon} alt="home" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home

