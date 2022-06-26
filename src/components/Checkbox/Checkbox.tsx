import React from "react"
import './Checkbox.css'
type props ={
    checkBoxValue?: boolean
    onChange?: () => {}
}

function Checkbox(props: props){
    return(
        <div>
           <input type={"checkbox"} />
        </div>        
    )
}

export default Checkbox