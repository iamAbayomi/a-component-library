import React from "react"
import { Box,  Image, Text } from "@chakra-ui/react"
import Button from "../Button/Button"

type props = {
    imageSrc: string,
    title: string,
    subTitle: string,
    buttonText: string
}

const MediaCard = ({imageSrc, title, subTitle, buttonText}: props) => {
    return (
       <Box maxWidth={"400px"} boxShadow={"0 1px 4px 0 rgba(0,0,0,0.2)"}
            padding={"20px"}>
            <Image src={imageSrc} />
            <Box display={"flex"}>  
                <Text>{title}</Text>
            </Box>
            <Text>{subTitle}</Text>
            <Button 
                height="40px" backgroundColor="blue"
                buttonText="Learn More"  width="200px"
                color="white"
            />
       </Box>
    )
}

export default MediaCard