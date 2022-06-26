import React from "react"
import { Box,Image ,Text } from "@chakra-ui/react"
import { IMenuItem } from "../../types"

type props = {
   navigationContent: Array<IMenuItem>
}

const Navigation = ({navigationContent}: props) => {
    return (
       <Box>
           {
            navigationContent.map((item) => (
                <Box display={"flex"}> 
                    <Image src={item.imageSrc} />
                    <Text fontWeight={"500"}>{item.menuText}</Text>
                </Box>
            ))
            }     
       </Box>
    )
}

export default Navigation