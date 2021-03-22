import React, { useState } from 'react';
import styles from './StarRating.module.css';
import starSelected from '../../assets/icons/starSelected.svg';
import starDeselected from '../../assets/icons/starDeselected.svg';

const StarRating = ({ label, starCount }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const handleRatingClick = (ratingValue) => {
    if (ratingValue !== rating) {
      setRating(ratingValue);
    } else {
      setRating(0);
      setHover(null);
    }
  };
  return (
    <div className={styles.ratingWrapper}>
      <div className={styles.label}>{label}</div>
      <div className={styles.starRateWrapper}>
        <div className={styles.ratingContainer}>
          {[...Array(starCount)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i} className={styles.radioButtonLabel}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  className={styles.radioButton}
                  onClick={() => handleRatingClick(ratingValue)}
                />
                <div
                  className={styles.starContainer}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                >
                  <img
                    //ratingValue less than or equal to (hover or value) ? true: stars show selected : false: stars show unselected
                    src={
                      ratingValue <= (hover || rating)
                        ? `${starSelected}`
                        : `${starDeselected}`
                    }
                    alt={ratingValue}
                  />
                </div>
              </label>
            );
          })}
        </div>
        <div className={styles.rating}>
          Rating: <span className={styles.ratingNumber}>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default StarRating;
