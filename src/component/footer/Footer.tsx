import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import style from './footer.module.scss';
import logo from '../../images/onDark.svg'
import facebook from '../../images/logo-facebook.svg'
import twitter from '../../images/logo-twitter.svg';
import instagram from '../../images/logo-instagram.svg';
import github from '../../images/logo-github.svg';
function Footer() {
    return (
        <div className={style.Footer}>
            <div className="container">
                <div className={style.FooterWrapper}>
                    <div className={style.FooterDirection}>
                        <img className={style.FooterImage} src={logo} alt="footer" />
                        <p className={style.FooterSubtitle}>Making the world a better place through <br /> constructing elegant hierarchies</p>
                        <div className={style.FooterFlex}>
                            <img src={facebook} alt="footer" />
                            <img src={twitter} alt="footer" />
                            <img src={instagram} alt="footer" />
                            <img src={github} alt="footer" />
                        </div>
                    </div>
                    <div className={style.FooterDirection}>
                        <span className={style.FooterLetter}>SOLUTIONS</span>
                        <Link to={'marketing'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink}>Marketing</Link>
                        <Link to={'analytics'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink}>Analytics</Link>
                        <Link to={'commerce'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink}>Commerce</Link>
                        <Link to={'insights'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink}>Insights</Link>
                    </div>
                    <div className={style.FooterDirection}>
                        <span className={style.FooterLetter}>SUPPORT</span>
                        <Link to={'pricing'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink} >Pricing</Link>
                        <Link to={'documentation'} spy={true} smooth={true} offset={-100} duration={500}  className={style.FooterLink} >Documentation</Link>
                        <Link to={'guides'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink} >Guides</Link>
                        <Link to={'API status'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink} >API Status</Link>
                    </div>
                    <div className={style.FooterDirection}>
                        <span className={style.FooterLetter}>COMPANY</span>
                        <NavLink className={style.FooterLink} to={'about'}>About</NavLink>
                        <Link to={'blog'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink} >Blog</Link>
                        <Link to={'jobs'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink} >Jobs</Link>
                        <Link to={'press'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink} >Press</Link>
                        <Link to={'partners'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink} >Partners</Link>
                    </div>
                    <div className={style.FooterDirection}>
                        <span className={style.FooterLetter}>LEGAL</span>
                        <Link to={'claim'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink} >Claim</Link>
                        <Link to={'privacy'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink} >Privacy</Link>
                        <Link to={'terms'} spy={true} smooth={true} offset={-100} duration={500} className={style.FooterLink} >Terms</Link>
                    </div>
                </div>
                <p className={style.FooterText}>© 2020 Dlex, Inc. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
