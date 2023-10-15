import { useState } from 'react'
import style from '../styles/help.module.scss';
import image from '../../../../images/Rectangle 1.png';
function Help() {

    const [open, setopen] = useState(false)

    return (
        <div className={style.Help} id='press'>
            <div className="container">
                <div className={style.HelpWrapper}>
                    <div className={style.HelpImage} onClick={()=> setopen(prev => !prev)}>
                        <img src={image} alt="help" />
                    </div>
                    <div className={style.HelpLast}>
                        <span className={style.HelpTitle}>AWARD WINNING SUPPORT</span>
                        <h1 className={style.HelpSuntitle}>We’re here to help</h1>
                        <p className={style.HelpLetter}>Amet minim mollit non deserunt ullamco est sit aliqua <br /> dolor do amet sint. Velit officia consequat duis enim velit <br /> mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <button className='btn'>Get started</button>
                    </div>
                    {
                        open && (
                            <div className={style.HelpImages} onClick={()=> setopen(false)}>
                                <img src={image} alt="help" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Help


