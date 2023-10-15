import style from '../styles/home.module.scss';
import logo from '../../../../images/Image (2).png';
import logo01 from '../../../../images/Phone Front 1.png';
import logo02 from '../../../../images/Image (3).png';
function Home() {
    return (
        <div className={style.Home} id='claim'>
            <div className="container">
                <div className={style.HomeWrapper}>
                    <div className={style.HomeFlex}>
                        <h1 className='title title-home'>
                            The modern <br /> way to build for <br /> the web
                        </h1>
                        <span className='subtitle subtitle-home'>
                            Dlex empowers designers to build <br /> professional, custom websites in a <br /> completely visual canvas with no code.
                        </span>
                        <div className={style.HomeWrap}>
                            <button className='btn'>Get Started</button>
                            <button className='button'>Learn more</button>
                        </div>
                    </div>
                    <div className='position'>
                        <img className='image' src={logo} alt="home" />
                        <img className='second second-last' src={logo01} alt="home" />
                        <img className="third third-last" src={logo02} alt="home" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
