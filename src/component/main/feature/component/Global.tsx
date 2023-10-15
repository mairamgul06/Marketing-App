import style from '../styles/global.module.scss'
function Global() {
    return (
        <div className={style.Global} id='documentation'>
            <div className="container">
                <div className={style.GlobalWrapper}>
                    <div className={style.GlobalFirst}>
                        <h1 className={style.GlobalTitle}>Global scale</h1>
                        <span className={style.GlobalSubtitle}>The backbone for internet <br /> business</span>
                        <p className={style.GlobalLink}>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br /> do amet sint. Velit officia consequat duis enim velit <br /> mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className={style.GlobalLast}>
                        <div className={style.GlobalBlock}>
                            <h1 className={style.GlobalLetter}>384K+</h1>
                            <p className={style.GlobalPage}>Once you’re set up, payouts <br /> arrive in your bank account.</p>
                        </div>
                        <div className={style.GlobalBlock}>
                            <h1 className={style.GlobalLetter}>90%</h1>
                            <p className={style.GlobalPage}>Once you’re set up, payouts <br /> arrive in your bank account.</p>
                        </div>
                        <div className={style.GlobalBlock}>
                            <h1 className={style.GlobalLetter}>135+</h1>
                            <p className={style.GlobalPage}>Once you’re set up, payouts <br /> arrive in your bank account.</p>
                        </div >
                        <div className={style.GlobalBlock}>
                            <h1 className={style.GlobalLetter}>45+</h1>
                            <p className={style.GlobalPage}>Once you’re set up, payouts <br /> arrive in your bank account.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Global
