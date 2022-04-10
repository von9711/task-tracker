const Button = ({color, text, onClick}) => {
    return (
        <div>
            <button className="btn" onClick={onClick} style={{backgroundColor: color}}>{ text }</button>
        </div>
    )
}

Button.defaultProps = {
    color: "black",
    text: "Add",
}

export default Button
