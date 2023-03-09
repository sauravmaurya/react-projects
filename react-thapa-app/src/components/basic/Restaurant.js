/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import './styles.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [...new Set(Menu.map((elem) => {
    return elem.category
})
), "All"]


function Restaurant() {
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)

    const filterItem = (category) => {

        if (category === "All") {
            setMenuData(Menu)
            return
        }

        const updatedList = Menu.filter((elem) => {
            if (elem.category === category) {
                return elem
            }
        })

        setMenuData(updatedList)
    }

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}></Navbar>
            <MenuCard menuData={menuData}></MenuCard>
        </>
    )
}

export default Restaurant
