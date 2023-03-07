import className from 'classnames'

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){

    const classes = className(rest.className,'flex items-center px-3 py-1.5 border',{
        'bg-blue-500 border-blue-500 text-white':primary,
        'bg-gray-900 border-gray-900 text-white':secondary,
        'bg-green-500 border-green-500 text-white':success,
        'bg-yellow-400 border-yellow-400 text-white':warning,
        'bg-red-500 border-red-500 text-white':danger,
        'rounded-full':rounded,
        'bg-white':outline,
        'text-blue-500':outline && primary,
        'text-gray-900':outline && secondary,
        'text-green-500':outline && success,
        'text-yellow-400':outline && warning,
        'text-red-500':outline && danger
    });

    Button.propTypes = {
        checkVariationvalue:({primary,secondary,success,warning,danger})=>{
            const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)

            if(count>1){
                return new Error("Only one of Primary, Secondary, Success, Warning, Danger can be true")
            }
        }
    }

    return <button {...rest} className={classes}>{children}</button>
}

export default Button