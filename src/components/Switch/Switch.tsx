import { Box } from "@chakra-ui/react"
import React from "react"
import "./Checkbox.css"

type props ={
    checkBoxValue?: boolean
    onChange?: () => {}
}

const Switch  = (props: props) => {
    return (
        <Box>
             <label className="switch">
                <input 
                    type="checkbox" 
                    onChange={props.onChange} 
                    value="true"
                    checked={props.checkBoxValue}/>
                <span className="slider round"></span>
            </label>
        </Box>
    )
}

export default Switch