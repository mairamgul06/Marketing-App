import style from '../styles/boost.module.scss'
function Boost() {
    return (
        <div className={style.Boost}>
            <div className="container">
                <div className={style.BoostWrapper}>
                    
                    <div className={style.BoostFlex}>
                        <h1 className={style.BoostTitle}>Boost your productivity. <br />
                            Start using workflow today.</h1>
                            <p className={style.BoostSubtitle}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint <br /> velit officia consequat duis enim velit mollit.</p>
                            <button className={style.BoostBtn}>Sign up for free</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boost
