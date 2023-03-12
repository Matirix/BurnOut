import React from 'react'
import { Link } from 'react-router-dom';



function Header(props) {

  const addApplication = [
    {
      name: 'plus',
      pic: '../images/plus.svg',
      link: '/applicationForm'
    }
  ]
  return (
    <div className='top-0 h-13 p-4 w-full relative bg-dark-navy flex justify-between'>
        <h1 className='text-white text-3xl font-saira text-center my-auto'>{props.text}</h1>
        <Link to={addApplication[0].link}>
          
          <img src={addApplication[0].pic} alt={addApplication[0].name} className='my-auto' />
        </Link>
    </div>
    
  )
}

export default Header