import styled from "styled-components"
import React from "react"

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
    @method
**/

export interface props {
    imageSrc: string
}

const Avatar: React.FC<props> = (props) =>{
   return(
        <div>
            <AvatarImage src={props.imageSrc}  />
        </div>
    ) 
}

export default Avatar



const AvatarImage = styled.img`
    margin: 0px 20px 0px 0px;
    height: 40px;
    border-radius: 50%;
`