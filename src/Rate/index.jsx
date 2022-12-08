import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";

const Rate = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }
    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((index) => (
        <AiFillStar
          key={index}
          onClick={() => onRating(index)}
          style={{
            cursor: "pointer",
            color: getColor(index),
            fontSize: "2rem"
          }}
          onMouseEnter={() => setHoverRating(index)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string
  }
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "gold",
    unfilled: "lightgray"
  }
};

export default Rate;
