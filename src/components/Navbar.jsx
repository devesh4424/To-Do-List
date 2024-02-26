import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-indigo-800 text-white justify-between py-2'>
        <div className='font-bold text-xl mx-8'>iTask</div>
        <ul className='flex gap-8 mx-9'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </div>
  )
}

export default Navbar
