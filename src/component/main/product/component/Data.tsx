
import style from '../styles/about.module.scss'
import { IData } from '../../../dataProduct/interface'
interface IDatas {
    data: IData
}
function Data({data}: IDatas) {
    return (
        <div key={data.id} className={style.Card}>
            <img className={style.CardImage} src={data.image} alt="image" />
            <h1 className={style.CardTitle}>{data.title}</h1>
            <span className={style.CardSubtitle}>{data.subtitle}</span>
        </div>
    )
}

export default Data



