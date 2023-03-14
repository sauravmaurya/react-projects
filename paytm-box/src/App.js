import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Profile from './Pages/Profile'



function App() {
    // const [boxList, setBoxList] = useState([])
    // const [clickSeq, setClickSeq] = useState([])
    // const [counter, setCounter] = useState(0)

    // const initialRender = () => {
    //     let boxArr = []
    //     for (let i = 0; i < number; i++) {
    //         boxArr = [...boxArr, { id: i, isGreen: false }]
    //     }
    //     setBoxList(boxArr)
    //     console.log(boxList)
    // }


    // const handleBoxClick = (id) => {
    //     console.log("handleClick")

    //     const updatedList = boxList.map((elem) => {
    //         if (elem.id === id) {
    //             if (clickSeq.includes(id)) {
    //                 var index = clickSeq.indexOf(id)
    //                 clickSeq.splice(index, 1)
    //                 setClickSeq(clickSeq)
    //                 return { ...elem, isGreen: false }
    //             }
    //             else {
    //                 console.log("true")
    //                 setClickSeq([...clickSeq, id])
    //                 return { ...elem, isGreen: true }
    //             }
    //         }

    //         return elem
    //     })
    //     setBoxList(updatedList)
    //     console.log(clickSeq)
    //     console.log(boxList)
    // }

    // useEffect(() => {
    //     if (boxList.length === 0) {
    //         initialRender()
    //     }

    //     let interval;
    //     if (clickSeq.length === 5) {
    //         if (counter < 5)
    //             interval = setTimeout(function () {
    //                 let updatedBoxList = boxList.map((elem) => {
    //                     if (elem.id === clickSeq[counter]) {
    //                         return { ...elem, isGreen: false }
    //                     }
    //                     return elem
    //                 })
    //                 setBoxList(updatedBoxList)
    //                 setCounter(counter + 1)
    //             }, 1000)
    //         if (counter === 5) {
    //             setCounter(0)
    //             setClickSeq([])
    //         }
    //     }

    //     return () => {
    //         clearInterval(interval)
    //     }

    // }, [boxList])



    return (
        <>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path="/" element={<Home number={5} />}>

                    </Route>
                    <Route path="/profile" element={<Profile />}>

                    </Route>
                    <Route path="/contact" element={<Contact />}>

                    </Route>
                    <Route path="/about" element={<About />}>

                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
