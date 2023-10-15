import style from  '../styles/rome.module.scss';
import logo from '../../../../images/Image.svg'
import romeIcon from '../../../../images/rome 1.svg'
function Rome() {
    return (
        <div className={style.Rome}>
            <div className="container">
                <div className={style.RomeWrapper}>
                    <img className={style.RomeImage} src={romeIcon} alt="rome" />
                    <span className={style.RomeTitle}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</span>
                    <div className={style.RomeFlex}>
                        <img className={style.RomeImg} src={logo} alt="rome" />
                        <span className={style.RomeLetter}>Kristin Watson </span>
                        <p className={style.RomeText}>/ CEO, Rome</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rome
