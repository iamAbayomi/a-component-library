import { Box, Button } from "@chakra-ui/react"
import React from "react"

type props = {
    onUploadMethod: () => void
}

const DropZone = (props: props) => {
    return (
        <Box border={"1px dashed black"} maxWidth={"300px"}
                width={"100%"} height={"100px"} >
            <Button display={"block"} margin={"40px auto 0px"} 
                   background={"white"} borderRadius={"15px"} 
                   padding={"0px 10px"}
                    >
                 Add files 
            </Button>
        </Box>
    )
}

export default DropZone