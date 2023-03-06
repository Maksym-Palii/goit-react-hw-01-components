import PropTypes from "prop-types"
import css from 'components/statistics/Statistics.module.css'
import { getRandomHexColor} from 'utils/randomHexColor'



export const Statistics = ({ title="" , stats }) => {

    return (
        <section className={css.statistics}>
            {title !== "" ? (<h2 className={css.title}>{title}</h2>)
            : null }
        
            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li key={id} className={css.item} style={{ backgroundColor: getRandomHexColor(), }}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>)
                })}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))  
}