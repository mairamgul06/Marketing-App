import { IBlog } from '../../../dataBlog/interface'
import style from '../styles/blog.module.scss'
interface IBlogs {
    blog: IBlog
}
function Data({blog}: IBlogs) {
    return (
        <>
            <div className={style.BlogBlock} key={blog.id}>
                            <img className={style.BlogImage} src={blog.image} alt="blog" />
                            <div className={style.BlogDirection}>
                            <p className={style.BlogPage}>{blog.title}</p>
                            <span className={style.BlogWrite}>{blog.subtitle}</span>
                            <p className={style.BlogLink}>{blog.price}</p>
                            <div className={style.BlogDirect}>
                                <img className={style.BlogIcon} src={blog.icon} alt="blog" />
                                <div className={style.BlogWrap}>
                                    <p className={style.BlogText}>{blog.text}</p>
                                    <span className={style.BlogSmall}>{blog.letter}</span>
                                </div>
                            </div>
                            </div>
                        </div>
        </>
    )
}

export default Data
