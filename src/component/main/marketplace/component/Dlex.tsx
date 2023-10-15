import { useState } from 'react';
import style from '../styles/dlex.module.scss';
import logo01 from '../../../../images/netflix (1) 1.svg';
import logo02 from '../../../../images/medium 2.svg';
import logo03 from '../../../../images/google 1.svg';
import logo04 from '../../../../images/youtube 1.svg';
import logo05 from '../../../../images/vercel 1.svg';
import logo06 from '../../../../images/docker 1.svg';
import image from '../../../../images/Rectangle 17.svg'
function Dlex() {
    const [open, setopen] = useState(false)
    return (
        <div className={style.Dlex} id='guides'>
            <div className="container">
                <div className={style.DlexPage}>
                    <div className={style.DlexWrapper}>
                        <div className={style.DlexFirst}>
                            <h1 className={style.DlexTitle}>Customer Spotlight</h1>
                            <span className={style.DlexSubtitle}>DocuSign enables <br /> customer to succeed <br /> with Dlex</span>
                            <p className={style.DlexLetter}>DocuSign uses Dlex to track key metrics to improve <br /> customer experience, resulting in more conversions, <br /> onboarding completions, and paid upgrades.</p>
                            <button className={style.DlexBtn}>Read full story</button>
                        </div>
                        <div className={style.DlexLast} onClick={() => setopen(prev => !prev)}>
                        </div>
                    </div>
                    <div className={style.DlexFlex}>
                        <h1 className={style.DlexText}>Trusted by over 39,000 forward-thinking companies</h1>
                        <div className={style.DlexWrap}>
                            <img src={logo01} alt="dlex" />
                            <img src={logo02} alt="dlex" />
                            <img src={logo03} alt="dlex" />
                            <img src={logo04} alt="dlex" />
                            <img src={logo05} alt="dlex" />
                            <img src={logo06} alt="dlex" />
                        </div>
                    </div>
                    {
                        open && (
                            <div className={style.DlexModal} onClick={() =>setopen(false)}>
                                <img src={image} alt="dlex" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Dlex
