import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const statistics = ({ data }) => {
  return (
    <>
      <section className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>

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
  data: PropTypes.string,
};

export default statistics;
