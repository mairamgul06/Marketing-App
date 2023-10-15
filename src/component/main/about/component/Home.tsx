import style from '../styles/home.module.scss'
function Home() {
    return (
        <div className={style.Home}>
            <div className="container">
                <div className={style.HomeWrapper}>
                    <div className={style.HomeFirst}>
                        <h1 className='title title-start'>Design is <br /> intelligence <br /> made visible</h1>
                        <p className='subtitle  subtitle-start'>Build alongside half a million developers and <br /> businesses like you.</p>
                        <button className='btn'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
