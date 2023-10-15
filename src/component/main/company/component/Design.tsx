import style from '../styles/design.module.scss'
import icon from '../../../../images/Image.svg';

function Design() {
    return (
        <div className={style.Design} id='privacy'>
            <div className="container">
                <div className={style.DesignWrapper}>
                    <div className={style.DesignFirst}>
                        <h1 className={style.DesignTitle}>From the blog</h1>
                        <span className={style.DesignSubtitle}>Design is intelligence made visible.</span>
                        <p className={style.DesignLetter}>Creativity is a highfalutin word for the work I have to do between now and Tuesday.</p>
                    </div>
                    <div className={style.DesignLast}>
                        <div className={style.DesignBlog}>
                            <div className={style.DesignLine}>Article</div>
                            <span className={style.DesignText}>Guide for designing better <br />
                                mobile apps typography</span>
                            <p className={style.DesignPrice}>In this article, I won’t talk about the general <br /> concepts of typography, which can be used <br /> both in print...</p>
                            <div className={style.DesignFlex}>
                                <img className={style.DesignIcon} src={icon} alt="desing" />
                                <div className={style.DesignWrap}>
                                    <span className={style.DesignWrite}>Kristin Watson</span>
                                    <p className={style.DesignPage}>Jun 27, 2020 · 6 min read</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.DesignBlog}>
                            <div className={style.DesignLine}>Video</div>
                            <span className={style.DesignText}>New Dashboard features to save <br /> you time</span>
                            <p className={style.DesignPrice}>Dashboard is the hub for millions of <br /> businesses to take action. We’ve launched <br /> dozens of new features in the Dashboard...</p>
                            <div className={style.DesignFlex}>
                                <img className={style.DesignIcon} src={icon} alt="desing" />
                                <div className={style.DesignWrap}>
                                    <span className={style.DesignWrite}>Kristin Watson</span>
                                    <p className={style.DesignPage}>Jun 27, 2020 · 6 min read</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.DesignBlog}>
                            <div className={style.DesignLine}>Case Study</div>
                            <span className={style.DesignText}>Noom sees an 8% increase in <br /> authorization rates with Dlex</span>
                            <p className={style.DesignPrice}>The health platform boosted acceptance <br /> rates and expanded global coverage by <br /> switching to Dlex</p>
                            <div className={style.DesignFlex}>
                                <img className={style.DesignIcon} src={icon} alt="desing" />
                                <div className={style.DesignWrap}>
                                    <span className={style.DesignWrite}>Kristin Watson</span>
                                    <p className={style.DesignPage}>Jun 27, 2020 · 6 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design
