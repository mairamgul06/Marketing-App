import style from '../styles/grow.module.scss'
import logo from '../../../../images/Group 251.png'
import logo01 from '../../../../images/Group 1000001640.png'
import checkIcon from '../../../../images/Check cr-fr.svg'
function Grow() {
    return (
        <div className={style.Grow} id='analytics'>
            <div className="container">
                <div className={style.GrowWrapper}>
                    <div className={style.GrowText}>
                        <p className={style.GrowSubtitle}>Optimize your payments</p>
                        <h1 className={style.GrowTitle}>Grow your revenue</h1>
                    </div>
                    <div className={style.GrowFlex}>
                        <div className={style.GrowFirst}>
                            <h2 className={style.GrowWrite}>Beat fraud</h2>
                            <p className={style.GrowSlice}>Fraud is a deliberate act (or failure to act) with the <br /> intention of obtaining an unauthorized benefit, either for <br /> oneself or for the institution.</p>
                            <div className={style.GrowImage}>
                            <img  src={logo} alt="grow" />
                            </div>
                            <div>
                                <div className={style.GrowFix}>
                                    <img className={style.GrowIcon} src={checkIcon} alt="grow" />
                                    <p className={style.GrowLetter}>Upgrade your customer experience instantly</p>
                                </div>
                                <div className={style.GrowFix}>
                                    <img className={style.GrowIcon} src={checkIcon} alt="grow" />
                                    <p className={style.GrowLetter}>Retain more, happier customers</p>
                                </div>
                                <div className={style.GrowFix}>
                                    <img className={style.GrowIcon} src={checkIcon} alt="grow" />
                                    <p className={style.GrowLetter}>Upgrade your customer experience instantly</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.GrowLast}>
                            <h2 className={style.GrowWrite}>Maximize acceptance</h2>
                            <p className={style.GrowSlice}>by using deception or false suggestions or suppression <br /> of truth or other unethical means, which are believed <br /> and relied upon by.</p>
                            <div className={style.GrowImage}>
                            <img src={logo01} alt="grow" />
                            </div>
                            <div>
                                <div className={style.GrowFix}>
                                    <img className={style.GrowIcon} src={checkIcon} alt="grow" />
                                    <p className={style.GrowLetter}>Upgrade your customer experience instantly</p>
                                </div>
                                <div className={style.GrowFix}>
                                    <img className={style.GrowIcon} src={checkIcon} alt="grow" />
                                    <p className={style.GrowLetter}>Retain more, happier customers</p>
                                </div>
                                <div className={style.GrowFix}>
                                    <img className={style.GrowIcon} src={checkIcon} alt="grow" />
                                    <p className={style.GrowLetter}>Start with done-for-you account setup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grow
