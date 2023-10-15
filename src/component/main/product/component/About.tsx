import { datas } from '../../../dataProduct/data';
import style from '../styles/about.module.scss';
import Data from './Data'
function About() {
    return (
        <div className={style.About} id='marketing'>
           <div className="container">
            <div className={style.AboutFlex}>
                <h1 className={style.AboutTitle}>Why dlex</h1>
                <p className={style.AboutSubtitle}>Creativity is nothing but the <br /> way to solve new problems.</p>
            </div>
           <div className={style.AboutWrapper}>
           <Data data={datas[0]}/>
            <Data data={datas[1]}/>
            <Data data={datas[2]}/>
            <Data data={datas[3]}/>
           </div>
           </div>
        </div>
    )
}

export default About
