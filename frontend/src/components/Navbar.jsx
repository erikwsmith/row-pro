import React, {useState} from 'react';

const Navbar = ({onMenuButtonClick}) => {
    
    return (
    <nav className="navbar w-full bg-base-300">
        <button onClick={onMenuButtonClick}className='btn bg-emerald-400 hover:bg-emerald-500 text-black'>&#9776;</button>
        <div className="px-4 text-2xl text-emerald-400">ROW-PRO</div>
    </nav>
    )
}

export default Navbar
