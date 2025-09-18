import React, { useState } from 'react';"7.6k (gzipped: 3k)"
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name, job, image, text } = people[index];
  const prevCard = () => {
    if (index === 0){
      setIndex(people.length - 1);
    }else {
      setIndex(index - 1);
    }
  };
  
  const nextCard = () => {
    if (index === people.length - 1){
      setIndex(0);
    }else {
      setIndex(index + 1)
    }
  };
  
  
  const randomCard = () => {
      let randomIndex = Math.floor(Math.random() * people.length);

      if (randomIndex === index) {
        randomIndex = (randomIndex + 1) % people.length;
      }
      setIndex(randomIndex);
  }
  return (
    <article className='review'>
      <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon"> 
              <FaQuoteRight />
          </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p CLassName="info">{text} </p>
      <div className="button-container">
          <button onClick={prevCard} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={nextCard} className="next-btn">
            <FaChevronRight></FaChevronRight>
          </button>
      </div>
      <button onClick={randomCard} className='random-btn'>Surprize me</button>
    </article>
  );
};
export default Review