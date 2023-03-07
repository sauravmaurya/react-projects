function Button({children,onClick,color}){

    return(
        <button style={{display:'block',color:"red",backgroundColor:color}} onClick={onClick}>{children}</button>
    )
}

export default Button