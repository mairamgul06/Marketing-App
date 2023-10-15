import style from '../styles/grow.module.scss';
import arrow from '../../../../images/longarrow-right.svg';
import logo from '../../../../images/Image (2).png';
import logo02 from '../../../../images/Image (3).png';
import logo01 from '../../../../images/ORWHAT - iPhone (1).png';
function Grow() {
    return (
        <div className={style.Grow} id='guides'>
            <div className="container">
                <div className={style.GrowWrapper}>
                    <div className={style.GrowFirst}>
                       <h1 className={style.GrowTitle}>Startup Mobile Apps <br /> & Completed design <br /> system</h1>
                       <span className={style.GrowSubtitle}>A complete design system with 70 pre-built <br /> screens for mobile apps to enable you to <br /> kick-off your mobile app design.</span>
                       <button className='btn-flex'>
                        <p>Get it Now</p>
                        <img src={arrow} alt="grow" />
                       </button>
                    </div>
                    <div className='position'>
                          <img className='image' src={logo} alt="grow" />
                          <img className='second' src={logo01} alt="grow" />
                          <img className="third" src={logo02} alt="grow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grow
