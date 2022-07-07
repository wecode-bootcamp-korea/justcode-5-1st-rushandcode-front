import React from 'react';

function ReviewStar(props) {
  const { idx, handleRadioInput, star } = props;
  return (
    <li>
      <input
        type="radio"
        value={5 - idx}
        name="rate"
        onChange={handleRadioInput}
      />
      {star}
    </li>
  );
}

export default ReviewStar;
