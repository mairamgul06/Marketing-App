import style from '../styles/home.module.scss'
function Home() {
    return (
        <div className={style.Home}>
            <div className="container">
                <div className={style.HomeWrapper}>
                    <h1 className='title'>Your business phone, <br /> reimagined.</h1>
                    <span className='subtitle'>Dlex adds a work phone number to your existing devices. <br />
                        No need to carry two phones or extra SIM cards.</span>
                        <button className={style.HomeBtn}>Purchase for $58</button>
                        <p className={style.HomeLink}>Learn more</p>
                </div>
            </div>
        </div>
    )
}

export default Home
