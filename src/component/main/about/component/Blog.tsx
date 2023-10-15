import style from '../styles/about.module.scss'
import net from '../../../../images/netflix (1) 1.svg';
import google from '../../../../images/google 1.svg';
import vercel from '../../../../images/vercel 1.svg';
import youtube from '../../../../images/youtube 1.svg';
import docker from '../../../../images/docker 1.svg';
function Blog() {
    return (
        <div className={style.Blog} id='blog'>
            <div className="container">
                <div className={style.BlogWrapper}>
                    <div className={style.BlogWrap}>
                        <img src={net} alt="blog" />
                        <img src={google} alt="blog" />
                        <img src={vercel} alt="blog" />
                        <img src={youtube} alt="blog" />
                        <img src={docker} alt="blog" />
                    </div>
                    <h1 className={style.BlogTitle}>
                        We’ve done it carefully and simply. Combined with the ingredients make for beautiful <br /> landings. It is definitely the tool you need to speed up your design process.
                    </h1>
                    <button className='btn'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Blog
