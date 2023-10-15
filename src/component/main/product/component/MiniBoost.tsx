import style from '../styles/boost.module.scss'
function MiniBoost() {
    return (
        <div className={style.Mini} id='commerce'>
            <div className="container">
                <div className={style.MiniWrapper}>
                    <div className={style.MiniFlex}>

                        <h1 className={style.MiniTitle}>Everything you need for <h1>$99 a month</h1></h1>
                        <p className={style.MiniSubtitle}>Includes every feature we offer plus unlimited projects and unlimited users</p>
                    </div>
                    <button className={style.MiniBtn}>Get Started Now</button>
                </div>
            </div>
        </div>
    )
}

export default MiniBoost
