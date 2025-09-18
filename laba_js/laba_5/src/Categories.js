import React from 'react'; 7.6k (gzipped: 3k)

const Categories = (filterItems) => {
  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={() => filterItems('all')}>
        all
      </button>
      <button className='filter-btn' onClick={() => filterItems('breakfast')}>
        breakfast
      </button>
      <button className='filter-btn' onClick={() => filterItems('lunch')}>
        lunch
      </button>
      <button className='filter-btn' onClick={() => filterItems('shakes')}>
        shakes
      </button>
    </div>
  )
};

export default Categories;
