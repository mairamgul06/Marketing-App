import style from '../styles/server.module.scss'
function Server() {
    return (
        <div className={style.Server}>
            <div className="container">
                <div className={style.ServerWrapper}>
                    <h1 className={style.ServerTitle}>Trusted by developers from over 80 country</h1>
                    <span className={style.ServerSubtitle}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
                    <div className={style.ServerFlex}>
                        <div className={style.ServerBlog}>
                            <span className={style.ServerLetter}>100%</span>
                            <p className={style.ServerText}>User satisfaction</p>
                        </div>
                        <div className={style.ServerBlog}>
                            <span className={style.ServerLetter}>24/7</span>
                            <p className={style.ServerText}>Customer support</p>
                        </div>
                        <div className={style.ServerBlog}>
                            <span className={style.ServerLetter}>250K</span>
                            <p className={style.ServerText}>Users served</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Server
