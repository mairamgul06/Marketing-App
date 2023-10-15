
import google from '../../../images/985_google_g_icon.jpg';
import style from './sign.module.scss'
function SignUp() {
    
    return (
        <div className={style.SignUp}>
            <div className="container">
            <form action="" className={style.SignUpForm}>
                    <input type="text" placeholder='Email' className={style.SignUpEmail} />
                    <input type="password" placeholder='Password' className={style.SignUpPassword} />
                    <button className={style.SignUpBtn}>Signin</button>
                    <div className={style.SignUpFlex}>
                        <img src={google} alt="sign" />
                        <p className={style.SignUpLetter}>Sign with google</p>
                    </div>
                    <p className={style.SignUpText} >Registration</p>
                </form>
            </div>
        </div>
    )
}

export default SignUp
