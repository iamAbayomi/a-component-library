import React, { useRef, useState } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { AiOutlineUpload } from "react-icons/ai";

type props = {
  onUploadMethod: () => void;
};

const FileUpload = (props: props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  //const imageUrl = true;
  const handleClick = () => inputRef.current?.click();

  function onFileInputChange() {
    if (inputRef.current?.files != null) {
      setImageUrl(inputRef.current.files[0].name);
    }
  }

  return (
    <form
      encType="multipart/form-data"
      style={{ width: "100%" }}
      onChange={onFileInputChange}
    >
      <input
        ref={(e) => {
          inputRef.current = e;
        }}
        type={"file"}
        hidden
        accept="image/png, image/jpeg, image/jpg"
      />
      <Box
        border={"1px dashed #80808096"}
        maxWidth={"500px"}
        width={"100%"}
        p={"20px 40px 30px"}
        borderRadius={"10px"}
        onClick={handleClick}
      >
        {imageUrl ? (
          <Image src={imageUrl} />
        ) : (
          <Box>
            <Box margin={"10px auto 0px"} maxW={"2.5rem"}>
              <AiOutlineUpload color="#80808096" size={"40px"} />
            </Box>
            <Button
              display={"block"}
              margin={"20px auto 0px"}
              background={"white"}
              border={"1px white"}
              borderRadius={"15px"}
              padding={"0px 10px"}
              _hover={{ border: "none" }}
              _focus={{ border: "none" }}
            >
              <Text
                fontSize={"14px"}
                textColor={"#80808096"}
                fontWeight={"300"}
              >
                Add files to upload
              </Text>
            </Button>
          </Box>
        )}
      </Box>
    </form>
  );
};

export default FileUpload;
