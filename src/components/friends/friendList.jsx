import PropTypes from 'prop-types';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <div className={styles.card}>
        {friends.map(friends => (
          <li key={friends.id} className={styles.item}>
            <span
              className={`${styles.status} ${
                friends.isOnline ? styles.online : styles.offline
              }`}
            ></span>
            <img
              className={styles.avatar}
              src={friends.avatar}
              alt={friends.name}
              width="48"
            />
            <p className={styles.name}>{friends.name}</p>
          </li>
        ))}
      </div>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default FriendList;
