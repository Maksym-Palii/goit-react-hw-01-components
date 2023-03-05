import PropTypes from "prop-types"
import css from 'components/friendListItem/FriendListItem.module.css'

export const FriendListItem = ({array}) => {
    return array.map(({id, name, avatar, isOnline }) => {
        return (
        <li key={id} className={css.item}>
            <span className={`${css.status} ${css[isOnline]}`}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
    })
}

FriendListItem.propTypes = {
    array: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
    }))
}