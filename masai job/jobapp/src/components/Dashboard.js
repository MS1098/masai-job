import React from 'react';
import "./dashboard.css";


function Dashboard({job:{
    company,
    postedAt,
    location,
    position,
    contract,
    language,
    city,
    level

}}) {
  return (
    <div className='flex bg-white shadow-lg my-4 p-6'>
        <div>
        <img className='image' src='http://www.bardfieldacademy.org/wp-content/uploads/2016/08/00106-3D-company-logos-design-free-logo-online-02.png'  alt={company}/>
        </div>
        <div>
            <h3 className='font-bold text-xl text-blue-500'>{company}</h3>
            <h2>{position}</h2>
            <p>
                {postedAt} * {contract} * {location}
            </p>
            </div>
        <div className='flex items-center ml-auto'>
        
         
            <span className='text-blue-500 bg-blue-100 font-bold m-3 p-2 rounded'>{language}</span>
        </div>
</div>
  )
}

export default Dashboard