import style from '../styles/form.module.scss';
function Form() {
    return (
        <div className={style.Form}>
            <div className="container">
                <div className={style.FormWrapper}>
                    <div className={style.FormFirst}>
                        <h1 className={style.FormTitle}>Sign up for our newsletter</h1>
                        <span className={style.FormSubtitle}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint velit officia consequat duis enim velit mollit.</span>
                    </div>
                    <div className={style.FormFlex}>
                        <div className={style.FormWrap}>
                            <input className={style.FormInput} type="text" placeholder='Enter email address' />
                            <button className={style.FormBtn}>Notify me</button>
                        </div>
                        <p className={style.FormLetter}>We care about the protection of your data. read our Privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
