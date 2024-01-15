import React, { useState, useEffect } from 'react'
import BoxList from '../components/BoxList'
import { useCallback } from 'react'

function Home({ number }) {

    const [boxList, setBoxList] = useState([])
    const [clickSeq, setClickSeq] = useState([])
    const [counter, setCounter] = useState(0)

    const initialRender = useCallback(() => {
        let boxArr = []
        for (let i = 0; i < number; i++) {
            boxArr = [...boxArr, { id: i, isGreen: false }]
        }
        setBoxList(boxArr)
    }, [number])


    const handleBoxClick = (id) => {
        const updatedList = boxList.map((elem) => {
            if (elem.id === id) {
                if (clickSeq.includes(id)) {
                    var index = clickSeq.indexOf(id)
                    clickSeq.splice(index, 1)
                    setClickSeq(clickSeq)
                    return { ...elem, isGreen: false }
                }
                else {
                    setClickSeq([...clickSeq, id])
                    return { ...elem, isGreen: true }
                }
            }

            return elem
        })
        setBoxList(updatedList)
    }

    useEffect(() => {
        initialRender()
    }, [initialRender])

    // if (clickSeq.length === number) {
    //     for (let i = 0; i < number; i++) {
    //         setTimeout(function () {
    //             let updatedBoxList = boxList.map((elem) => {
    //                 if (elem.id === clickSeq[i]) {
    //                     return { ...elem, isGreen: false }
    //                 }
    //                 return elem
    //             })
    //             setBoxList(updatedBoxList)
    //             // setCounter(counter + 1)
    //         }, 1000)
    //     }
    // }

    useEffect(() => {
        console.log("inside use effect")
        let interval;
        if (clickSeq.length === number) {
            if (counter < number)
                interval = setTimeout(function () {
                    let updatedBoxList = boxList.map((elem) => {
                        if (elem.id === clickSeq[counter]) {
                            return { ...elem, isGreen: false }
                        }
                        return elem
                    })
                    setBoxList(updatedBoxList)
                    setCounter(counter + 1)
                }, 1000)
            if (counter === number) {
                setCounter(0)
                setClickSeq([])
            }
        }

        return () => {
            clearInterval(interval)
        }

    }, [boxList])

    return (
        <div>
            Home page
            <BoxList boxList={boxList} onChange={handleBoxClick}></BoxList>
        </div>
    )
}

export default Home
