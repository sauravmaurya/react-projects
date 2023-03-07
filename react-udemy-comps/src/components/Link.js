import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({to,children,className,activeClassname }){
    const {navigate,currentPath} = useNavigation()

    const classes = classNames("text-blue-500",
    className,
    currentPath===to && activeClassname
    )

    const handleClick = (event)=>{
        if(event.metaKey||event.ctrlKey){
            return
        }
        event.preventDefault()
        navigate(to)
    }
    
    return <a onClick={handleClick} href={to} className={classes}>{children}</a>

}

export default Link