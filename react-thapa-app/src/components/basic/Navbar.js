import React from 'react'

function Navbar({ filterItem, menuList }) {
    const renderedList = menuList.map((elem) => {
        return (
            <>
                <button className='btn-group__item' onClick={() => filterItem(elem)}>{elem}</button>
            </>
        )
    })

    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {renderedList}
                </div>
            </nav>
        </>
    )
}

export default Navbar
