import style from '../styles/home.module.scss';
import logo from '../../../../images/Image (1).png';
import logo01 from '../../../../images/Image.png';
function Home() {
    
    
    return (
        <div className={style.Home} id='insights'>
            <div className="container">
            <div className={style.HomeWrapper}>
                <h1 className='title'>Have no fear of perfection, <br />
                    you'll never reach it.</h1>
                    <span className='subtitle'>Create interactive user flow diagrams that tell a story.</span>
                    <div className={style.HomeFlex}>
                        <div className={style.HomeFirst}><img src={logo} alt="home" /></div>
                        <div className={style.HomeCenter}>
                        </div>
                        <div className={style.HomeLast}><img src={logo01} alt="home" /></div>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Home
