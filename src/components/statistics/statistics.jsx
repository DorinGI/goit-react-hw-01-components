import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const statistics = ({ data, title }) => {
  return (
    <>
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.statlist}>
          {data.map((item, id) => (
            <li
              key={id}
              className={styles.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default statistics;
