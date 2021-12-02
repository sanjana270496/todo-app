import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
const InputTodo = props => {
    const [inputText, setInputText] = useState({
        title: "",
    })
    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (inputText.title.trim()){
            props.addTodoProps(inputText.title)
            setInputText({
                title: "",
            })
        } else {
            alert("please write items...")
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text" className="input-text" placeholder="add todo..." value={inputText.title} name="title" onChange={onChange} />
            <button className="input-submit">
                <FaPlusCircle style={{ color:"darkcyan", fontSize:"20px", marginTop:"2px" }} className="submit-icon" />
            </button>
        </form>
    )
}
    
export default InputTodo