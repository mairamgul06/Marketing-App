import { IFeature } from '../../../dataFeature/interface'
import style from '../styles/about.module.scss'
interface IFeatures{
    feature: IFeature
}
function Data({feature}: IFeatures) {
    return (
        <div className={style.Data}>
            <img className={style.DataImage} src={feature.image} alt="feature" />
            <h1 className={style.DataTitle}>{feature.title}</h1>
            <span className={style.DataSubtitle}>{feature.subtitle}</span>
        </div>
    )
}

export default Data
