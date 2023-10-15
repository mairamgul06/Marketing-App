import { useState } from 'react'
import style from '../styles/tabs.module.scss';
import rome from '../../../../images/rome 1.svg';
import discord from '../../../../images/discord 1.svg';
import dinatrace from '../../../../images/dynatrace 1.svg';
import terser from '../../../../images/terser 1.svg';
import clitch from '../../../../images/Group (1).svg';
import netflix from '../../../../images/netflix (1) 1.svg';
import image01 from '../../../../images/Image (8).svg';
import image02 from '../../../../images/Image (2).svg';
import image03 from '../../../../images/Image03.svg';
import image04 from '../../../../images/Image 04.svg';
import image05 from '../../../../images/Image 05.svg';
import image06 from '../../../../images/Image (1).svg';
function Tabs() {
    const [state, setState] = useState(1);
    const action = (index: any) => {
        setState(index);
    };
    return (
        <div className={style.Tabs} id='jobs'>
            <div className="container">
                <div className={style.TabsWrapper}>
                    <div className={style.TabsWrap}>
                        <img onClick={() => action(1)} className={`${state === 1 ? 'icon-active' : 'icon'}`} src={rome} alt="tabs" />
                        <img onClick={() => action(2)} className={`${state === 2 ? 'icon-active' : 'icon'}`} src={discord} alt="tabs" />
                        <img onClick={() => action(3)} className={`${state === 3 ? 'icon-active' : 'icon'}`} src={dinatrace} alt="tabs" />
                        <img onClick={() => action(4)} className={`${state === 4 ? 'icon-active' : 'icon'}`} src={terser} alt="tabs" />
                        <img onClick={() => action(5)} className={`${state === 5 ? 'icon-active' : 'icon'}`} src={clitch} alt="tabs" />
                        <img onClick={() => action(6)} className={`${state === 6 ? 'icon-active' : 'icon'}`} src={netflix} alt="tabs" />
                    </div>
                    <div className={`${state === 1 ? 'post-active' : 'post'}`}>
                        <p className={style.TabsLetter}>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.”</p>
                        <div className={style.TabsFlex}>
                            <img className={style.TabsIcon} src={image01} alt="tabs" />
                            <span className={style.TabsSubtitle}>Marvin McKinney,</span>
                            <p className={style.TabsText}>Co-Founder, CEO</p>
                        </div>
                    </div>
                    <div className={`${state === 2 ? 'post-active' : 'post'}`}>
                        <p className={style.TabsLetter}>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.”</p>
                        <div className={style.TabsFlex}>
                            <img className={style.TabsIcon} src={image02} alt="tabs" />
                            <span className={style.TabsSubtitle}>Kristin Watson,</span>
                            <p className={style.TabsText}>Developer</p>
                        </div>
                    </div>
                    <div className={`${state === 3 ? 'post-active' : 'post'}`}>
                        <p className={style.TabsLetter}>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.”</p>
                        <div className={style.TabsFlex}>
                            <img className={style.TabsIcon} src={image03} alt="tabs" />
                            <span className={style.TabsSubtitle}>Brooklyn Simmons, </span>
                            <p className={style.TabsText}> Lead design</p>
                        </div>
                    </div>
                    <div className={`${state === 4 ? 'post-active' : 'post'}`}>
                        <p className={style.TabsLetter}>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.”</p>
                        <div className={style.TabsFlex}>
                            <img className={style.TabsIcon} src={image04} alt="tabs" />
                            <span className={style.TabsSubtitle}>Cameron Williamson,</span>
                            <p className={style.TabsText}>Product manager</p>
                        </div>
                    </div>
                    <div className={`${state === 5 ? 'post-active' : 'post'}`}>
                        <p className={style.TabsLetter}>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.”</p>
                        <div className={style.TabsFlex}>
                            <img className={style.TabsIcon} src={image05} alt="tabs" />
                            <span className={style.TabsSubtitle}>Annette Black, </span>
                            <p className={style.TabsText}>Graphic designer</p>
                        </div>
                    </div>
                    <div className={`${state === 6 ? 'post-active' : 'post'}`}>
                        <p className={style.TabsLetter}>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.”</p>
                        <div className={style.TabsFlex}>
                            <img className={style.TabsIcon} src={image06} alt="tabs" />
                            <span className={style.TabsSubtitle}>Darrell Steward,</span>
                            <p className={style.TabsText}>Camera man</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs
