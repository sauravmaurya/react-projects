import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function Accordion({ items, selection, onSelect }) {
    const [expandedIndex, setExpandedIndex] = useState(-1)
    console.log(expandedIndex)
    const handleClick = (indexRef) => {

        // code to update state to fix $0.click();$0.click() (patching) error
        // setExpandedIndex((currentExpandedIndex)=>{
        //     if (currentExpandedIndex===indexRef)
        //     {
        //         return -1
        //     } else{
        //         return indexRef
        //     }
        // }) 

        if (expandedIndex === indexRef) {
            setExpandedIndex(-1)
        }
        else {
            setExpandedIndex(indexRef)
        }
    }


    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex

        const icon = <span className='text-xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
        // const content= isExpanded && item.text
        return <div key={item.id}>
            <div onClick={() => { handleClick(index) }} className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">
                {item.title}
                {icon}
            </div>
            {/* renders item.text if is expended is true else does not print anything as && of (at least 1 false gives first false value) or (both true gives second true value) and false value is not rendered by react*/}
            {isExpanded && <div className="border-b p-5">{item.text}</div>}
        </div>


    })
    return (<div>
        <div className='border-x border-t rounded'>{renderedItems}</div>
    </div>)
}