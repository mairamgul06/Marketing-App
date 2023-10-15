import style from '../styles/contact.module.scss'
function Contact() {
    return (
        <div className={style.Contact} id='partners'>
                <div className={style.ContactWrapper}>
                    <div className={style.ContactBack}>
                    </div>
                    <div className={style.ContactWrap}>
                        <div className={style.ContactFirst}>
                            <span className={style.ContactTitle}>Contact us</span>
                            <p className={style.ContactSubtitle}>You have a new project? <br />
                                or want to say hello...</p>
                            <p className={style.ContactWrite}>info@email.com</p>
                        </div>
                        <div className={style.ContactLast}>
                            <span className={style.ContactText}>Offices</span>
                            <p className={style.ContactLetter}>1901 Thornridge Cir. <br />
                                Shiloh, Hawaii 81063</p>
                            <p className={style.ContactLetter}>8502 Preston Rd. <br />
                                Inglewood, Maine 98380</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Contact
