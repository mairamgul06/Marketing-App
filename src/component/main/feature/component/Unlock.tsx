import style from '../styles/unlock.module.scss'
function Unlock() {
    return (
        <div className={style.Unlock} id='pricing'>
            <div className="container">
                <div className={style.UnlockWrapper}>
                    <h1 className={style.UnlockTitle}>Unlock your professional communications</h1>
                    <div className={style.UnlockFlex}>
                        <div className={style.UnlockBlock}>
                            <h1 className={style.UnlockLetter}>100%</h1>
                            <span className={style.UnlockLink}>Manage communication more <br /> efficiently and faster</span>
                        </div>
                        <div className={style.UnlockBlock}>
                            <h1 className={style.UnlockLetter}>24/7</h1>
                            <span className={style.UnlockLink}>Improve communication with <br /> customers and clients</span>
                        </div>
                        <div className={style.UnlockBlock}>
                            <h1 className={style.UnlockLetter}>250K</h1>
                            <span className={style.UnlockLink}>Average improvement in team <br /> efficiency and fast</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unlock
