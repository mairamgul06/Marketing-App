import { blogs } from '../../../dataBlog/blog'
import Data from './Data'
import style from '../styles/blog.module.scss'
function Blog() {
    return (
        <div className={style.Blog}>
            <div className="container">
                <div className={style.BlogWrapper}>
                    <div className={style.BlogFlex}>
                        <h1 className={style.BlogTitle}>From the blog</h1>
                        <span className={style.BlogSubtitle}>From our blog</span>
                        <p className={style.BlogLetter}>Creativity is a highfalutin word for the work I have to do <br /> between now and Tuesday.</p>
                    </div>
                    <div className={style.BlogBlog}>
                        <Data blog={blogs[0]}/>
                        <Data blog={blogs[1]}/>
                        <Data blog={blogs[2]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
