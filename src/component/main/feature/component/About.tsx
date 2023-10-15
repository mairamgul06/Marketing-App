import { features } from '../../../dataFeature/feature'
import style from '../styles/about.module.scss'
import Data from './Data'
function About() {
    return (
        <div className={style.About} id='API status'>
            <div className="container">
                <div className={style.AboutFlex}>
                    <h1 className={style.AboutTitle}>Meet our Team</h1>
                    <p className={style.AboutSubtitle}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
                <div className={style.AboutWrapper}>
                    <Data feature={features[0]} />
                    <Data feature={features[1]} />
                    <Data feature={features[2]} />
                    <Data feature={features[3]} />
                    <Data feature={features[4]} />
                    <Data feature={features[5]} />
                    <Data feature={features[6]} />
                    <Data feature={features[7]} />
                    <Data feature={features[8]} />
                    <Data feature={features[9]} />
                    <Data feature={features[10]} />
                    <Data feature={features[11]} />
                </div>
            </div>
        </div>
    )
}

export default About
