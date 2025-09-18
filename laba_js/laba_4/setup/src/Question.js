import React, { useState } from 'react'; 7.6k (gzipped: 3.1k)
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button 
        className="btn"
        onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "-": "+"}
        </button>
      </header>
      <p>{info}</p>

      {showInfo && <p>{info}</p>}
    </article>
  )
};

export default Question;
