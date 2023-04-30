import React from 'react';

const Category = ({ category }) => {
    // console.log(category)
    const { category_logo, category_name, jobs_available } = category
    return (
        <div className='border-2 border-emerald-400 bg-emerald-200 p-4 rounded-lg'>
            <img className='w-10 bg-emerald-300 rounded-lg' src={category_logo} alt="" />
            <h1 className='mt-2 text-2xl font-medium'>{category_name}</h1>
            <p className='text-[#A3A3A3]'>{jobs_available}</p>
        </div>
    );
};

export default Category;