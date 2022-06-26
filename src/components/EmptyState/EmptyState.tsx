import React from "react" 
import {Box, Image, Text} from "@chakra-ui/react"

type props = {
    imageSrc: string,
    text: string
}

const EmptyState = ({imageSrc, text="No Item here"}: props) => {
    return (
       <Box maxWidth={"300px"} p={"20px"} boxShadow={"0 1px 4px 0 rgba(0,0,0,0.2)"} >
           <Box margin={"0px auto"} maxWidth="100px">
                <Image src={imageSrc} />
                <Text>{text}</Text>
           </Box>
       </Box>
    )
}


export default EmptyState