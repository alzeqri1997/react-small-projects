import React, { useState } from 'react';
import people from './data';
import rightArrow from './right-arrow.png';
import leftArrow from './left-arrow.png';

const Review = () => {
  const [index, setIndex] = useState(0);
  // data of each person.
  const { name, job, image, text } = people[index];
  // check index.
  const checkNumber = (number) => {
    if (number > people.length - 1) return 0;
    if (number < 0) return people.length - 1;
    return number;
  };
  // go to the next person
  const nextPerson = () => {
    setIndex((index) => checkNumber(index + 1));
  };
  // go to the previous person
  const prevPerson = () => {
    setIndex((index) => checkNumber(index - 1));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <img
            className="arrow"
            src={leftArrow}
            alt="left arrow"
            onClick={prevPerson}
          />
        </button>
        <button className="next-btn">
          <img
            className="arrow"
            src={rightArrow}
            alt="left arrow"
            onClick={nextPerson}
          />
        </button>
      </div>
    </article>
  );
};

export default Review;
