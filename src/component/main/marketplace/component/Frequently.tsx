import style from '../styles/frequently.module.scss';
import questIcon from '../../../../images/Question Mark cr-fr.svg'
function Frequently() {
    return (
        <div className={style.Frequently} id='documentation'>
            <div className="container">
                <div className={style.FrequentlyWrapper}>
                    <h1 className={style.FrequentlyTitle}>Frequently asked questions</h1>
                    <span className={style.FrequentlySubtitle}>Get the best services at the lowest price</span>
                    <div className={style.FrequentlyWrap}>
                        <div className={style.FrequentlyBlog}>
                            <img className={style.FrequentlyIcon} src={questIcon} alt="frequently" />
                            <div className={style.FrequentlyDirect}>
                                <span className={style.FrequentlyText}>How long do payouts take?</span>
                                <p className={style.FrequentlyLetter}>Once you’re set up, payouts arrive in your <br /> bank account on a 2-day rolling basis. Or <br /> you can opt to receive payouts weekly or <br /> monthly.</p>
                            </div>
                        </div>
                        <div className={style.FrequentlyBlog}>
                            <img className={style.FrequentlyIcon} src={questIcon} alt="frequently" />
                            <div className={style.FrequentlyDirect}>
                                <span className={style.FrequentlyText}>How much do disputes cost?</span>
                                <p className={style.FrequentlyLetter}>Disputed payments (also known as <br /> chargebacks) incur a $15.00 fee. If the customer’s bank resolves the <br /> dispute in your <br /> favor, the fee is fully refunded.</p>
                            </div>
                        </div>
                        <div className={style.FrequentlyBlog}>
                            <img className={style.FrequentlyIcon} src={questIcon} alt="frequently" />
                            <div className={style.FrequentlyDirect}>
                                <span className={style.FrequentlyText}>How much do disputes cost?</span>
                                <p className={style.FrequentlyLetter}>Disputed payments (also known as <br /> chargebacks) incur a $15.00 fee. If the customer’s bank resolves the <br /> dispute in your <br /> favor, the fee is fully refunded.</p>
                            </div>
                        </div>
                        <div className={style.FrequentlyBlog}>
                            <img className={style.FrequentlyIcon} src={questIcon} alt="frequently" />
                            <div className={style.FrequentlyDirect}>
                                <span className={style.FrequentlyText}>How much do disputes cost?</span>
                                <p className={style.FrequentlyLetter}>Disputed payments (also known as <br /> chargebacks) incur a $15.00 fee. If the customer’s bank resolves the <br /> dispute in your <br /> favor, the fee is fully refunded.</p>
                            </div>
                        </div>
                        <div className={style.FrequentlyBlog}>
                            <img className={style.FrequentlyIcon} src={questIcon} alt="frequently" />
                            <div className={style.FrequentlyDirect}>
                                <span className={style.FrequentlyText}>How long do payouts take?</span>
                                <p className={style.FrequentlyLetter}>Once you’re set up, payouts arrive in your <br /> bank account on a 2-day rolling basis. Or <br /> you can opt to receive payouts weekly or <br /> monthly.</p>
                            </div>
                        </div>
                        <div className={style.FrequentlyBlog}>
                            <img className={style.FrequentlyIcon} src={questIcon} alt="frequently" />
                            <div className={style.FrequentlyDirect}>
                                <span className={style.FrequentlyText}>How much do disputes cost?</span>
                                <p className={style.FrequentlyLetter}>Disputed payments (also known as <br /> chargebacks) incur a $15.00 fee. If the customer’s bank resolves the <br /> dispute in your <br /> favor, the fee is fully refunded.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frequently
