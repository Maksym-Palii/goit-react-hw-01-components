import PropTypes from "prop-types"
import css from 'components/statistics/Statistics.module.css'



export const Statistics = ({ title=`Upload stats`, stats }) => {
    return (
    <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

            <ul className={css.statList}>
                {stats.map(({id, label, percentage }) => {
                    return (
                        <li key={id} className={css.item}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
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
  })),
    
}