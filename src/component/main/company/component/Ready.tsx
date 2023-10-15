import style from '../styles/ready.module.scss';
import image from '../../../../images/Image (5).png';
function Ready() {
    return (
        <div className={style.Ready} id='terms'>
            <div className="container">
                <div className={style.ReadyWrapper}>
                    <div className={style.ReadyFirst}>
                        <h1 className={style.ReadyTitle}>Ready to dive in? <br />
                            Start your free trial <br /> today.</h1>
                            <p className={style.ReadySubtitle}>Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint velit officia consequat <br /> duis enim velit mollit.</p>
                            <button className='btn'>Sign up for free</button>
                    </div>
                    <div className={style.ReadyLast}>
                        <img src={image} alt="ready" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ready
