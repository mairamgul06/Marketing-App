import style from '../styles/ready.module.scss';
import icon from '../../../../images/Group 1000001638 (2).svg';
import icon01 from '../../../../images/Group 1000001638 (3).svg';
import lineArrow from '../../../../images/line.svg'; 
function Ready() {
    return (
        <div className={style.Ready} >
            <div className="container">
                <div className={style.ReadyWrapper}>
                    <div className={style.ReadyFirst}>
                        <h1 className={style.ReadyTitle}>Ready to get started?</h1>
                        <span className={style.ReadySubtitle}>Explore products, or create an account instantly and <br /> start accepting payments. You can also contact us to <br /> design a custom package for your business.</span>
                        <div className={style.ReadyFlex}>
                            <button className='btn'>Start now</button>
                            <button className='button'>Contact sales</button>
                        </div>
                    </div>
                    <div className={style.ReadyLast}>
                        <div className={style.ReadyBlog}>
                            <img className={style.ReadyIcon} src={icon} alt="ready" />
                            <span className={style.ReadyLetter}>Fast delivery</span>
                            <p className={style.ReadyText}>Amet minim mollit non deserunt <br /> ullamco  est sit aliqua dolor do  <br /> amet sint. Velit officia consequat.</p>
                            <div className={style.ReadyWrap}>
                            <p className={style.ReadyLink}>Pricing details</p>
                            <img src={lineArrow} alt="ready" />
                            </div>
                        </div>
                        <div className={style.ReadyBlog}>
                            <img className={style.ReadyIcon} src={icon01} alt="ready" />
                            <span className={style.ReadyLetter}>Customer support</span>
                            <p className={style.ReadyText}>Amet minim mollit non deserunt <br /> ullamco  est sit aliqua dolor do <br /> amet sint.  Velit officia consequat.</p>
                            <div className={style.ReadyWrap}>
                            <p className={style.ReadyLink}>Go there</p>
                            <img src={lineArrow} alt="ready" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ready
