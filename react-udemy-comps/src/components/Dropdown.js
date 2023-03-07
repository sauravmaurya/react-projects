import {useState,useEffect,useRef} from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

function Dropdown({options,value,onChange}){
    const [isOpen,setIsOpen] = useState(false)
    const divEl= useRef();

    useEffect(()=>{
        if(!divEl.current){
            return;
        }

        const handler = (event)=>{
            if(!divEl.current.contains(event.target))
            setIsOpen(false)
        }

        document.addEventListener('click',handler,true)

        const cleanup = ()=>{
            document.removeEventListener('click',handler)
        }

        return cleanup
    },[])

    const handleClick=()=>{
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option)=>{
        setIsOpen(false)
        onChange(option)
    }

    const renderedOptions= options.map((option)=>{
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>handleOptionClick(option)} key={option.value}>{option.label}</div>
    }) 

    // let label="Select..."
    // if(selection){
    //     label=selection.label;
    // }
    // other shorthand method is used to print the label of select

    return(<div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>{value?.label||"Select..."}<GoChevronDown/></Panel>
        {isOpen && <Panel className='absolute top-full '>{renderedOptions}</Panel>}
    </div>)
}

export default Dropdown