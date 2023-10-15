
import style from './sign.module.scss'
function SignIn() {
    
    return (
        <div className={style.SignUp}>
            <div className="container">
                <form action="" className={style.SignUpForm}>
                    <input type="text" placeholder='Email' className={style.SignUpEmail} />
                    <input type="password" placeholder='Password' className={style.SignUpPassword} />
                    <button className={style.SignUpBtn} >Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
