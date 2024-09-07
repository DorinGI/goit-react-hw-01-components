import styles from './card.module.css';
import PropTypes from 'prop-types';
const Card = ({ user }) => {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={user.avatar} alt="User avatar" className={styles.avatar} />
          <p className={styles.name}>{user.username}</p>
          <p className={styles.tag}>{user.tag}</p>
          <p className={styles.location}>{user.location}</p>
        </div>

        <ul class={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{user.stats.followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{user.stats.views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Card.propTypes = {
  user: PropTypes.string,
};

export default Card;
